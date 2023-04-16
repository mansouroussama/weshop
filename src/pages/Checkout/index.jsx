import Container from '../../components/ui/Container'
import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Checkout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const clearCartHandler = () => {
      dispatch(cartActions.clearCart())
   }
   useEffect(() => {
      setTimeout(() => {
         clearCartHandler()
         navigate('/');
      }, 5000)
   })
   return (
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            <div className="flex flex-col justify-center items-center text-center">
               <div className="-mt-16 -mb-10">
                  <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_6sxyjyjj.json" style={{ height: '450px', width: '450px', margin: '0'}}></Player>
               </div>
               <div className="flex flex-col gap-2">
                  <p className="text-3xl font-bold">Your order is on its way</p>
                  <p className="text-lg font-normal text-zinc-400/75">We are currently processing your order</p>
               </div>
            </div>
         </Container>
      </div>
   );
}
 
export default Checkout;