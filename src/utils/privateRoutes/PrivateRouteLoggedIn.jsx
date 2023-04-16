import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteLoggedIn = () => {
   const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
   // if user is already logged in and wants to log in or sign up again, redirect to homepage
   return ( isLoggedIn === true ? <Navigate to="/"/> : <Outlet/> )
}
 
export default PrivateRouteLoggedIn;