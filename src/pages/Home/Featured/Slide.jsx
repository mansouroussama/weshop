import Heading from "../../../components/ui/Heading";
import ButtonAlt from "../../../components/ui/ButtonAlt";
import { ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const Slide = (props) => {
   const { id, title, category, price, thumbnail } = props.item
   const navigate = useNavigate();

   const navigateToProductHandler = () => {
      navigate(`/products/${id}`)
   }
   return ( 
      <div className="h-96 bg-zinc-100/75 rounded flex">
         <div className="w-2/5 flex flex-col justify-between items-start pl-8 md:pl-12 pt-14 pb-8">
            <div className="flex flex-col items-start gap-2 md:gap-3">
               <Heading className="text-3xl md:text-4xl">{title}</Heading>
               <Heading className="text-zinc-400/75 font-medium text-xl md:text-2xl">{`$${price}`}</Heading>
            </div>
            <div className="flex flex-col items-start gap-3">
               <ButtonAlt className="flex gap-2 !p-2.5 md:!p-3 items-center border-2 border-zinc-300 text-zinc-400/75" onClick={navigateToProductHandler}>
                  Shop now
                  <ArrowRight color="#3f3f46" weight="regular" size={20} />
               </ButtonAlt> 
            </div>
         </div>
         <div className="w-3/5 flex justify-center items-center">
            <img src={thumbnail} alt="category" className="h-48 md:h-64 lg:h-72 mix-blend-multiply hover:scale-105 hover:-rotate-1 origin-center transition-transform duration-500"/>
         </div>
      </div>
    );
}
 
export default Slide;