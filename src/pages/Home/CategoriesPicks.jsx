import Heading from '../../components/ui/Heading'
import CategoryItem from '../Categories/CategoryItem';
import ButtonAlt from '../../components/ui/ButtonAlt';
import { ArrowRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const CategoriesPicks = () => {
   const categoriesPicks = useSelector((state) => state.ui.picks.categoryPicks)
   const categoriesNames = useSelector((state) => state.ui.categoriesNames)
   const dataLoaded = useSelector((state) => state.ui.dataLoaded)

   const navigate = useNavigate();
   const goToCategoriesPageHandler = () => {
      navigate("/categories")
   }
   const formatName = (name) => {
     return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   }
   return ( 
      <>
         <div className="flex justify-between items-end">
            <Heading>Categories</Heading>
            <ButtonAlt className="flex gap-2 justify-center items-center" onClick={goToCategoriesPageHandler}>
               See All
               <ArrowRight color="#000" weight="regular" size={20} />
            </ButtonAlt>
         </div>
         <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6">
            {dataLoaded && categoriesPicks.map((category) => {
               const key = uuidv4();
               return <CategoryItem title={formatName(categoriesNames[category.id])} key={key} imgLink={category.link} link={categoriesNames[category.id]}/>
            })}
         </div>
      </>
    );
}
 
export default CategoriesPicks;