import { Heart, ShoppingCart, X } from "@phosphor-icons/react";
import classNames from "classnames";
import { wishlistActions } from "../../../store/wishlist-slice";
import { cartActions } from "../../../store/cart-slice";
import { useDispatch } from "react-redux";

const ItemAction = (props) => {
   const { type } = props;
   const dispatch = useDispatch();

   const cl = type === 'addToCart' ? "bottom-3 bg-zinc-900" : "top-3 bg-zinc-200/75 rounded-full"
   const className = classNames("rounded transition-transform p-2 absolute -right-10 group-hover:-translate-x-12 duration-300 z-10", cl)

   const actionHandler = () => {
      if (type === "addToWishlist") {
         dispatch(wishlistActions.addWishlistItem(props.data))
      }
      if (type === "removeFromWishlist") {
         dispatch(wishlistActions.removeWishlistItem(props.data))
      }
      if (type === "addToCart") {
         dispatch(cartActions.addCartItem(props.data))
      }
   }
   return ( 
      <button className={className} onClick={actionHandler}>
         {type === "removeFromWishlist" && <X color="#3f3f46 " weight="bold" size={20}/>}
         {type === "addToWishlist" && <Heart color="#3f3f46 " weight="bold" size={20}/>}
         {type === "addToCart" && <ShoppingCart color="#fff " weight="bold" size={20}/>}
      </button>
   );
}
 
export default ItemAction;