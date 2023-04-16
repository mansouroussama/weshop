import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import NavBtns from "./NavBtns";
import Slide from "./Slide";
import { useSelector } from 'react-redux';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const Featured = () => {
   const picks = useSelector((state) => state.ui.picks.itemPicks)
   const formatNumber = (number) => number.toLocaleString('en-US', { minimumIntegerDigits: 2 })
   
   return (
      <div className="relative select-none">
         <Swiper
         spaceBetween={0}
         slidesPerView={1}
         loop={true}
         pagination={{
            type: "fraction",
            horizontalClass: 'pagination',
            formatFractionCurrent: (number) => formatNumber(number),
            formatFractionTotal: (number) => formatNumber(number)
         }}
         effect={"fade"}
         fadeEffect= {{
            crossFade: true
         }}
         modules={[EffectFade, Pagination]}
         >
            {picks.map((item) => {
               const id = uuidv4();
               return <SwiperSlide key={id}><Slide item={item}/></SwiperSlide>
            })}
            <NavBtns/>
         </Swiper>
      </div>
    );
}
 
export default Featured;