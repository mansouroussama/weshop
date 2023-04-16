import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Search from './pages/Search';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Product from './pages/Product';
import Home from './pages/Home';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRouteLoggedIn from './utils/privateRoutes/PrivateRouteLoggedIn';
import PrivateRouteNotLoggedIn from './utils/privateRoutes/PrivateRouteNotLoggedIn';
import PrivateRouteEmptyCart from './utils/privateRoutes/PrivateRouteEmptyCart';

// // login/signup firebase authentication
// // fetch picks and categories only once
// // hotpicks list in firebase
// // search/categories/category/product api request
// // fetch hot picks once and store in state
// //categories activeclassname only when categories page is active (not on each category)
// // cart/wishlist logic
// // add/remove wishlist + add to cart logic for action btns
// // responsive cart page + checkout animation (component)
// // change py on wrapper div in all pages
// // root layout: header, outlet, footer
// // move all data fetching to seperate functions in a seperate file
// // slider + responsive

// lazy loading (rendering only once the data is fetched) instead of loaded state
// better data fetching using loader and useloaderdata instead of useeffect
// Form component for search input 
// firebase remove read:yes and use api key to fetch
// firebase users: users>user>(wishlist+cart)

function App() {  

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<NotFound/>}/>
            <Route element={<PrivateRouteLoggedIn/>}>
              <Route path="/login" element={<LogIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
            </Route>
            <Route element={<PrivateRouteNotLoggedIn/>}>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route element={<PrivateRouteEmptyCart/>}>
                <Route path="/checkout" element={<Checkout/>}/>
              </Route>
            </Route>          
            <Route path="/search" element={<Search/>}/>
            <Route path="/categories/" element={<Categories/>}/>
            <Route path="/categories/:categoryid" element={<Category/>}/>
            <Route path="/products/:productid" element={<Product/>}/>
          </Route> 
        </Routes>
      </Provider>
    </>
  )
}

// home: firebase (hot picks products ids, hot categories ids, slider)
// dummyjson: categories, category products, product, search
// login/signup/wishlist/cart: firebase (users) 

// FIREBASE: home picks, users>user>(wishlist+cart)
// REDUX: currentUser(wishlist+cart), loggedIn
export default App
