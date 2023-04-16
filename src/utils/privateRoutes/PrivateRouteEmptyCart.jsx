import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteEmptyCart = () => {
   const totalQuantity = useSelector((state) => state.cart.totalQuantity)
   const cartIsEmpty = totalQuantity === 0;
   // if cart is empty and user wants to visit checkout page, redirect to homepage
   return ( cartIsEmpty ? <Navigate to="/"/> : <Outlet/> )
}
 
export default PrivateRouteEmptyCart;