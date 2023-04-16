import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteNotLoggedIn = () => {
   const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
   // if user is not logged in and wants to visit cart or wishlist, redirect to login page
   return ( isLoggedIn === false ? <Navigate to="/login"/> : <Outlet/> )
}
 
export default PrivateRouteNotLoggedIn;