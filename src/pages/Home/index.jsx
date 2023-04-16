import Container from '../../components/ui/Container'
import Featured from './Featured';
import ItemPicks from '../../components/ui/ItemPicks';
import CategoriesPicks from './CategoriesPicks';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { fetchPicks, fetchCategories } from '../../utils/api';
import { useSelector } from "react-redux";
import HomeLoader from '../../utils/skeletons/HomeLoader';

const Home = () => {
   const dispatch = useDispatch();
   const [loaded, setLoaded] = useState(false)
   const loadedFromCache = useSelector((state) => state.ui.dataLoaded)

   useEffect(() => {
     const fn = async () => {
        console.log(loadedFromCache)
         if (loadedFromCache) {
            setLoaded(true);
            return
         }
         setLoaded(false);
         const data = await Promise.all([fetchPicks(), fetchCategories()])
         const formattedData = {
           categories: data[0].categories,
           picks: data[0].picks,
           categoriesNames: data[1],
           dataLoaded: true
         }
         dispatch(uiActions.setUiPicks(formattedData))
         setLoaded(true);
      }
      fn();
   }, [])
 
   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            {!loaded && <HomeLoader/>}
            {loaded && <>
               <Featured/>
               <ItemPicks title="Hot Picks"/>
               <CategoriesPicks/>
               <ItemPicks title="Hot Picks"/>
            </>}
         </Container>
      </div>
    );
}
 
export default Home;