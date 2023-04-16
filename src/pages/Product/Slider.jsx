import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { PhotoAlbum } from "react-photo-album";

import { useEffect, useState } from "react";

const Slider = (props) => {
   const [index, setIndex] = useState(-1);
   const [currentImage, setCurrentImage] = useState({id: 0, img: ''});
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      setIndex(-1);
      setLoaded(true);
      setCurrentImage({id: 0, img: props.images[0]});
 
   }, [])
   useEffect(() => {
      // Set hover effect
      if (loaded) {
         const thumbnails = document.querySelectorAll('.thumbnail-image');
         console.log(thumbnails)
         thumbnails.forEach((thumbnail, i) => {
            console.log(i)
            if (i === 0) thumbnail.classList.add('opacity-100')
            else thumbnail.classList.add('opacity-60')
         })
      }
   }, [loaded])


   const photos = () => props.images.map((el,i) => ({src: el, key: i }))

   const hoverThumbnailHandler = (e) => {
      const img = e.target;
      const container = img.parentElement;
      // Change current image id
      if (img.classList.contains('thumbnail-image')) {
         const i = container.dataset.index;
         console.log(i);
         if (currentImage.id === i) return
         setCurrentImage({id: i, img: img.src});
      }
      // Set hover effect
      const thumbnails = document.querySelectorAll('.thumbnail-image');
      thumbnails.forEach((thumbnail) => {
         thumbnail.classList.remove('opacity-100')
         thumbnail.classList.add('opacity-60')
      })
      img.classList.remove('opacity-60')
      img.classList.add('opacity-100')
      
   }
   const openLightboxHandler = () => {
      console.log(currentImage.id)
      const thumbnails = document.querySelectorAll('.thumbnail-image');
      thumbnails[currentImage.id].click()
   }
   return (
   <>
      <div className="w-20 md:w-36 lg:w-24 h-full shrink-0 overflow-scroll no-scrollbar" onMouseOver={hoverThumbnailHandler}>
         <PhotoAlbum
         photos={photos()}
         layout="columns"
         columns={1}
         spacing={8}
         targetRowHeight={100}
         onClick={({ index }) => {setIndex(index)}} 
         componentsProps={() => ({
            imageProps: { className : 'thumbnail-image object-cover rounded !w-full !h-full !m-0 transition-opacity duration-300 mix-blend-multiply', style: ''},
            columnContainerProps : {style : { alignItems: 'stretch', gap: '8px' }}
         })}
         renderPhoto={({ photo, renderDefaultPhoto }) => (
            <div className="thumbnail cursor-pointer h-[100px]" data-index={photo.key}>
               {renderDefaultPhoto({ wrapped: false })}
            </div>)}
         />
      </div>
      <div className="w-full h-full bg-zinc-100">
         <img href='javascript:void(0)' src={currentImage.img} alt="image" className="grow rounded w-full h-full object-contain cursor-zoom-in mix-blend-multiply" onClick={openLightboxHandler}/>
      </div>
      <Lightbox
         slides={photos()}
         open={index >= 0}
         index={index}
         close={() => setIndex(-1)}
         counter={{ style: { top: 0, left: 10 } }}
         plugins={[Fullscreen, Zoom, Counter]}
      />
   </> );
}
 
export default Slider;