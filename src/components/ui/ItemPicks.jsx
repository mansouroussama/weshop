import Heading from './Heading'
import Item from './Item';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const ItemPicks = (props) => {
   const itemPicks = useSelector((state) => state.ui.picks.itemPicks)
   const dataLoaded = useSelector((state) => state.ui.dataLoaded)
   return ( 
      <>
         <Heading>{props.title}</Heading>
         <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6">
            {dataLoaded && itemPicks.map((item) => {
               const key = uuidv4();
               return <Item data={item} key={key}/>
            })}
         </div>
      </>
    );
}
 
export default ItemPicks;