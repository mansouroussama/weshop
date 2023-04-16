import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import CategoryItem from "./CategoryItem";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";

const Categories = () => {
   const categories = useSelector((state) => state.ui.categories)
   const categoriesNames = useSelector((state) => state.ui.categoriesNames)
   const loaded = useSelector((state) => state.ui.dataLoaded)

   const formatName = (name) => {
     return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   }

   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            <Heading>Categories</Heading>
            {/* <CategoriesLoader/> */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6">
               {loaded && categoriesNames.map((category, i) => {
                  const id = uuidv4();
                  return <CategoryItem title={formatName(category)} key={id} imgLink={categories[i].link} link={category}/>
               })}
            </div>
         </Container>
      </div>
    );
}
 
export default Categories;