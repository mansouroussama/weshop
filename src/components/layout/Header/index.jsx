import { Heart, ShoppingCart } from "@phosphor-icons/react";
import Container from '../../ui/Container';
import SearchInput from './SearchInput';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, NavLink } from "react-router-dom";
import { userActions } from '../../../store/user-slice';
import { signOut } from 'firebase/auth'
import { auth } from '../../../utils/firebase-config'

const Header = () => {
   const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
   const displayName = useSelector((state) => state.user?.displayName.split(' ')[0])
   const wishlistItemstotalQuantity = useSelector((state) => state.wishlist.totalQuantity)
   const cartItemstotalQuantity = useSelector((state) => state.cart.totalQuantity)
   const dispatch = useDispatch();
   const navigate = useNavigate()

   const goToLoginPageHandler = () => {
      navigate('/login')
   }
   const logoutHandler = async () => {
      await signOut(auth);
      dispatch(userActions.logout());
   }
   //underline decoration-4 underline-offset-[6px] decoration-yellow-400
   return (
      <div className="bg-white py-4 shadow-sm shadow-gray-200 sticky top-0 z-30">
         <Container className="md:items-center gap-3 md:gap-6 lg:gap-10 flex-col md:flex-row">
            <div className="flex items-center gap-6 lg:gap-10">
               <Link className="text-xl font-semibold" to="/">WESHOP</Link>
               <SearchInput/>
            </div>
            <div className="flex flex-grow items-center justify-between">
               <NavLink className={(data) => data.isActive ? "-ml-3.5 font-semibold px-4 py-3.5 bg-zinc-100 rounded-md" : "-ml-3.5 font-semibold px-4 py-3.5"} to="/categories" end>Categories</NavLink>
               {!isLoggedIn && <button onClick={goToLoginPageHandler} className="font-semibold">Log in</button>}
               {isLoggedIn && 
               <div className="flex items-center gap-4">
                  {displayName && <span>{displayName}</span>}
                  <NavLink className={(data) => data.isActive ? "p-3 bg-zinc-100 rounded-full relative" : "p-3 relative"} to="/wishlist">
                     <Heart size={20} weight="bold"/>
                     <span className="absolute w-5 h-4 flex justify-center items-center top-1 right-0.5 text-xs font-medium bg-red-500 rounded-full text-white">{wishlistItemstotalQuantity}</span>
                  </NavLink>
                  <NavLink className={(data) => data.isActive ? "p-3 bg-zinc-100 rounded-full relative" : "p-3 relative"}to="/cart">
                     <ShoppingCart size={20} weight="bold"/>
                     <span className="absolute w-5 h-4 flex justify-center items-center top-1 right-0.5 text-xs font-medium bg-red-500 rounded-full text-white">{cartItemstotalQuantity}</span>
                     </NavLink>
                  <button className="font-semibold" onClick={logoutHandler}>Sign out</button>
               </div>}
            </div>
         </Container>
      </div>
   )
}
export default Header