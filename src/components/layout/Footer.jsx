import Container from '../ui/Container';
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <>
         <div className="bg-zinc-900 text-white py-10 border-b-2 border-zinc-800">
            <Container className="justify-between flex-col md:flex-row gap-8 md:gap-0">
               <div className="flex flex-col items-start gap-5 md:w-1/3">
                  <Link to="/" className="text-xl font-semibold uppercase">weshop</Link>
                  <p className="text-zinc-500 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
               <div className="flex gap-28 mr-24">
                  <ul className="flex flex-col gap-2.5">
                     <li className="mb-2 font-semibold uppercase">Shop</li>
                     <li className="text-zinc-500"><Link to="/categories">Categories</Link></li>
                     <li className="text-zinc-500"><Link to="/wishlist">Wishlist</Link></li>
                     <li className="text-zinc-500"><Link to="/cart">Cart</Link></li>
                  </ul>
                  <ul className="flex flex-col gap-2.5">
                     <li className="mb-2 font-semibold uppercase">Weshop</li>
                     <li className="text-zinc-500"><a href="javascript:void(0)">About Us</a></li>
                     <li className="text-zinc-500"><a href="javascript:void(0)">Help</a></li>
                     <li className="text-zinc-500"><a href="javascript:void(0)">Carrers</a></li>
                  </ul>
               </div>
            </Container>
         </div>
         <div className="bg-zinc-900 text-white py-7">
         <Container className="justify-between items-center">
            <h1 className="text-sm text-zinc-500">© 2023 WESHOP, Inc.</h1>
            <ul className="flex gap-4 md:gap-6">
               <li className="text-zinc-500"><a href="javascript:void(0)">Privacy</a></li>
               <li className="text-zinc-500"><a href="javascript:void(0)">Cookies</a></li>
               <li className="text-zinc-500"><a href="javascript:void(0)">Terms of Service</a></li>
            </ul>
         </Container>
         </div>
      </>
   )
}
export default Footer