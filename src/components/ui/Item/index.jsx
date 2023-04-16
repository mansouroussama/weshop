import ItemAction from "./itemAction";
import { useSelector } from 'react-redux';
import classNames from "classnames";
import formatTitle from "../../../utils/formatTitle";
import { Link } from "react-router-dom";

const Item = (props) => {
   const { isWishlistItem } = props;
   const { id, title, category, price, thumbnail } = props.data
   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
   const imgClass = classNames("w-40 translate-y-1.5 group-hover:-rotate-2 group-hover:scale-110 origin-bottom transition-transform duration-300 mix-blend-multiply", isLoggedIn ? "origin-bottom-right" : "")

   return ( 
      <div className="flex flex-col flex-auto rounded overflow-hidden">
         <div className="h-48 bg-zinc-100/75 flex items-stretch group relative overflow-hidden">
            <Link to={`/products/${id}`} className="flex-grow flex justify-center items-center hover:no-underline">
               <img src={thumbnail} alt="category" className={imgClass}/>
            </Link>
            {isLoggedIn && isWishlistItem && <ItemAction type="removeFromWishlist" data={id}/>}
            {isLoggedIn && !isWishlistItem && <ItemAction type="addToWishlist" data={{id, title, category, price, thumbnail }}/>}
            {isLoggedIn && <ItemAction type="addToCart" data={{id, title, category, price, thumbnail }}/>}
         </div>
         <Link to={`/products/${id}`} className="block hover:no-underline">
            <div className="py-5 flex flex-col gap-1.5">
               <h2 className="font-medium text-sm uppercase text-zinc-400">{formatTitle(category)}</h2>
               <h2 className="font-semibold text-lg">{title}</h2>
               <h2 className="font-normal text-xl text-red-500">{`$${price}`}</h2>
            </div>
         </Link>
      </div>
   );
}
 
export default Item;