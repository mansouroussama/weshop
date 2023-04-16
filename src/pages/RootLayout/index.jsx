import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Outlet } from "react-router-dom";

import { Scrollbars } from 'react-custom-scrollbars-2';
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RootLayout = () => {
   const scrollContainer = useRef()
   const { pathname } = useLocation();

   useEffect(() => {
      scrollContainer.current.scrollToTop()
   }, [pathname]);

   // console.log(scrollContainer);
   return ( 
      <>
         <Scrollbars
            ref={scrollContainer}
            style={{ width: '100%', height: '100vh' }}
            renderTrackVertical={({ ...props }) =>
               <div {...props}  className={`${props.className} !w-3 !z-50 !inset-y-0 !right-1`} />}
            renderThumbVertical={({ ...props }) =>
               <div {...props} className={`${props.className} !bg-zinc-900 rounded-full`} />}
               autoHide
               autoHideTimeout={700}
            >
            <Header/>
            <Outlet/>
            <Footer/>
         </Scrollbars>
      </>
   );
}
 
export default RootLayout;