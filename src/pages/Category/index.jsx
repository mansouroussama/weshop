import Container from '../../components/ui/Container'
import Heading from '../../components/ui/Heading'
import Item from '../../components/ui/Item';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import formatTitle from '../../utils/formatTitle';
import CategoryLoader from "../../utils/skeletons/CategoryLoader";
import { fetchCategory } from '../../utils/api';

const Category = () => {
   const location = useLocation();
   const currentCategory = location.pathname.split('/categories/')[1]
   console.log(currentCategory);
   const [categoryItems, setCategoryItems] = useState([]);
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      const fn = async () => {
         setLoaded(false);
         const data = await fetchCategory(currentCategory)
         setCategoryItems(data.products)
         setLoaded(true);
         console.log(data.products)
      }
      fn()
   }, [])

   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            <div className="flex flex-col gap-3">
               <Breadcrumb location={currentCategory}/>
               <Heading className="mt-2">{formatTitle(currentCategory)}</Heading>
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6">
               {!loaded && <CategoryLoader/>}
               {loaded && categoryItems.map((item) => {
                  return <Item data={item}/>
               })}
            </div>
         </Container>
      </div>
    );
}
 
export default Category;