import Container from '../../components/ui/Container'
import Heading from '../../components/ui/Heading'
import Item from '../../components/ui/Item';
import ButtonAlt from '../../components/ui/ButtonAlt';
import { Trash } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { wishlistActions } from '../../store/wishlist-slice';
import { Player } from '@lottiefiles/react-lottie-player';

const Wishlist = () => {
   const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)
   const totalQuantity = useSelector((state) => state.wishlist.totalQuantity)
   console.log(wishlistItems)
   const dispatch = useDispatch();
   
   const clearWishlistHandler = () => {
      dispatch(wishlistActions.clearWishlist())
   }
   const wishlist = <>
      <div className="flex justify-between items-end -mt-4">
         <Heading>Wishlist <span className="text-xl text-zinc-400/75 font-medium">{`(${totalQuantity} items)`}</span></Heading>
         <ButtonAlt className="flex gap-2 justify-center items-center" onClick={clearWishlistHandler}>
            Clear Wishlist
            <Trash color="#000" weight="regular" size={20} />
         </ButtonAlt>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6">
         {wishlistItems.map((data) => {
            const key = uuidv4();
            return <Item isWishlistItem data={data} key={key}/>
         })}
      </div>
   </> 
   const noResults = <div className="flex flex-col justify-center items-center text-center mb-6">
      <Player autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_ysrn2iwp.json" style={{ height: '220px', width: '220px', margin: '0'}}></Player>
      <div className="flex flex-col gap-2">
         <p className="text-3xl font-bold">Your wishlist is empty</p>
         <p className="text-lg font-normal text-zinc-400/75">Try adding items to your wishlist</p>
      </div>
   </div>

   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            {totalQuantity === 0 ? noResults : wishlist}
         </Container>
      </div>
    );
}
 
export default Wishlist;