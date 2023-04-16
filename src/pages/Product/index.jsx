import Container from "../../components/ui/Container";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ItemPicks from "../../components/ui/ItemPicks";
import Heading from "../../components/ui/Heading";
import { Rating } from 'react-simple-star-rating'
import { Star, Heart, ShoppingCart  } from "@phosphor-icons/react";
import Button from "../../components/ui/Button";
import ButtonAlt from "../../components/ui/ButtonAlt";

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { wishlistActions } from "../../store/wishlist-slice";
import { cartActions } from "../../store/cart-slice";
import { fetchProduct } from "../../utils/api";
import ProductLoader from "../../utils/skeletons/ProductLoader";
import Slider from "./Slider";
import empty from "empty-value";

const Product = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const currentProduct = location.pathname.split('/products/')[1];
   const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

   const [product, setProduct] = useState([]);
 
   const star = <Star className="fill-zinc-900 inline" size={26} weight="fill" />
   const starEmpty = <Star className="fill-zinc-900 inline" size={26} weight="regular"/>

   useEffect(() => {
      const fn = async () => {
         setProduct(null);
         const data = await fetchProduct(currentProduct)
         setProduct(data);
         console.log(empty(product))
      }
      fn()
   }, [location])

   const addToWishlistItemHandler = () => {
      dispatch(wishlistActions.addWishlistItem(product))
   }
   const addToCartHandler = () => {
      dispatch(cartActions.addCartItem(product))
   }
   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-6">
            {empty(product) && <ProductLoader/>}
            {!empty(product) &&   
            <>
               <Breadcrumb location={product.category}/>
               <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 mb-8 lg:mb-10">
                  <div className="w-full flex grow-0 gap-2 items-start h-[50vw] lg:h-[34vw] ">
                     <Slider images={[product.thumbnail, ...product.images]}/>
                  </div>
                  <div className="w-full lg:w-[380px] flex flex-col shrink-0 items-start gap-8">
                     <div className="flex flex-col gap-1.5">
                        <Heading className="text-zinc-500/75 font-medium text-xl font-serif">{product.brand}</Heading>
                        <Heading className="text-3xl">{product.title}</Heading>
                        <Heading className="font-semibold text-red-500 flex items-center gap-2 mt-1">{`$${product.price}`}<span className="text-zinc-500/75 text-base font-normal">{`(-${Math.round(product.discountPercentage)}%)`}</span></Heading>
                     </div>
                     <Rating
                        className="-ml-0.5"
                        initialValue={product.rating}
                        transition
                        allowFraction
                        SVGclassName="inline-block w-7 h-7 mr-5"
                        fillIcon={star}
                        emptyIcon={starEmpty}
                        readonly
                     />
                     <p className="text-zinc-400/75 text-lg font-normal">{product.description}</p>
                     <div className="flex flex-col self-stretch items-stretch gap-2">
                        <div className="border-2 border-zinc-200 p-3.5">
                           <span className="text-zinc-500">{`${product.stock} items left`}</span>
                        </div>
                        <div className="flex gap-2">
                           <Button className="flex flex-grow gap-3 justify-center items-center p-4 rounded-r-none" onClick={addToCartHandler}>
                              <ShoppingCart size={20} weight="bold" />
                              Add to cart
                              </Button>
                           <ButtonAlt className="p-4 rounded-l-none" onClick={addToWishlistItemHandler}>
                              <Heart size={20} weight="bold"/>
                              </ButtonAlt>
                        </div>
                     </div>
                  </div>
               </div>
               {isLoggedIn && <ItemPicks title="Based on your Activity"/>}
            </>}
         </Container>
      </div>
   );
}
 
export default Product;