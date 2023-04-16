import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import ButtonAlt from '../../components/ui/ButtonAlt'
import Heading from '../../components/ui/Heading'
import { Trash, ArrowRight } from "@phosphor-icons/react";
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { v4 as uuidv4 } from 'uuid';
import { Player } from '@lottiefiles/react-lottie-player';

const Cart = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.cartItems)
   const totalQuantity = useSelector((state) => state.cart.totalQuantity)
   const totalCost = useSelector((state) => state.cart.totalCost)
   const delivery = useSelector((state) => state.cart.delivery)
   const totalPrice = useSelector((state) => state.cart.totalPrice)
   const goHomeHandler = () => {
      navigate("/")
   }
   const clearCartHandler = () => {
      dispatch(cartActions.clearCart())
   }
   const proceedToCheckout = () => {
      navigate("/checkout")
   }
   const noResults = <div className="flex flex-col justify-center items-center gap-6 text-center mt-4 mb-6">
      <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_fzoupjne.json" style={{ height: '180px', width: '180px', margin: '0'}}></Player>
      <div className="flex flex-col gap-2">
         <p className="text-3xl font-bold">Your cart is empty</p>
         <p className="text-lg font-normal text-zinc-400/75">Try adding items to your cart</p>
      </div>
   </div>
   const cart = <>
      <Heading>Cart <span className="text-xl text-zinc-400/75 font-medium">{`(${totalQuantity} items)`}</span></Heading>
      <div className="flex gap-8 lg:gap-16 flex-col md:flex-row">
         <div className="flex flex-col w-full md:w-auto gap-5 items-stretch mr-auto">
            {cartItems.map((item) => {
               const key = uuidv4();
               return <CartItem data={item} key={key}/>
            })}
         </div>
         <div className="flex flex-col gap-4 w-full md:w-1/3 xl:w-1/4">
            <div className="flex justify-between">
               <h3 className="text-lg font-semibold">Cost:</h3>
               <h3 className="text-lg font-normal text-zinc-400/75">{`$${totalCost}`}</h3>
            </div>
            <div className="flex justify-between">
               <h3 className="text-lg font-semibold">Delivery:</h3>
               <h3 className="text-lg font-normal text-zinc-400/75">{`$${delivery}`}</h3>
            </div>
            <hr className="border border-zinc-200"/>
            <div className="flex justify-between">
               <h3 className="text-lg font-semibold">Total:</h3>
               <h3 className="text-lg font-normal text-zinc-400/75">{`$${totalPrice}`}</h3>
            </div>
            <div className="flex flex-col gap-2 mt-2">
               <Button className="ml-auto !bg-red-600" onClick={clearCartHandler}>
                  <Trash size={20} weight="bold" />
               </Button>
               <Button className="flex gap-2.5 justify-center items-center" onClick={proceedToCheckout}>
                  Proceed to checkout
                  <ArrowRight color="#fff" weight="bold" size={20} />
               </Button>
               <ButtonAlt onClick={goHomeHandler}>
                  Continue shopping
               </ButtonAlt>
            </div>
         </div>
      </div>
   </>

   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            {totalQuantity === 0 ? noResults : cart}
         </Container>
      </div>
    );
}
 
export default Cart;