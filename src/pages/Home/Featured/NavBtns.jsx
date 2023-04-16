import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import ButtonAlt from "../../../components/ui/ButtonAlt";
import { useSwiper } from "swiper/react";

const NavBtns = (props) => {
   const swiper = useSwiper();

   return ( 
      <div className="absolute right-6 md:right-8 bottom-8 flex gap-3 z-50">
         <ButtonAlt onClick={() => swiper.slidePrev()} className="!p-2 md:!p-3 !bg-transparent border-2 border-zinc-300 rounded-full">
            <ArrowLeft color="#3f3f46" weight="regular" size={20} />
         </ButtonAlt>
         <ButtonAlt onClick={() => swiper.slideNext()} className="!p-2 md:!p-3 !bg-transparent border-2 border-zinc-300 rounded-full">
            <ArrowRight color="#3f3f46" weight="regular" size={20} />
         </ButtonAlt>
      </div>
    );
}
 
export default NavBtns;