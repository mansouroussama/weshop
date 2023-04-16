import { X } from "@phosphor-icons/react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
   const { id, title, category, price, thumbnail, totalPrice, quantity } = props.data
   const dispatch = useDispatch();
   const addCartItemHandler = () => {
      dispatch(cartActions.addCartItem(props.data))
   }
   const removeCartItemHandler = () => {
      dispatch(cartActions.removeCartItem({id}))
   }
   const clearCartItemHandler = () => {
      dispatch(cartActions.clearCartItem({id}))
   }

   return ( 
      <div className="flex gap-8 items-stretch relative pr-12">
         <img src={thumbnail} alt="" className="w-44 rounded"/>
         <div className="flex flex-col justify-center items-start gap-4 ">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-5">
               <div className="border-2 border-gray-200 flex font-medium">
                  <button className="px-3.5 py-2 border-r-2" onClick={removeCartItemHandler}>-</button>
                  <span className="px-3.5 py-2">{quantity}</span>
                  <button className="px-3.5 py-2 border-l-2" onClick={addCartItemHandler}>+</button>
               </div>
               <span className="text-lg text-zinc-400/75 font-normal">{`$${price}`}</span>
            </div>
            <h1 className="text-lg text-zinc-400/75 font-medium">Total: <span className="text-zinc-900">{`$${totalPrice}`}</span></h1>
            <button className="rounded-full hover:bg-zinc-200/50 absolute right-3 top-1 p-1.5" onClick={clearCartItemHandler}>
               <X color="#3f3f46 " weight="bold" size={20}/>
            </button>
         </div>
      </div>
    );
}
 
export default CartItem;