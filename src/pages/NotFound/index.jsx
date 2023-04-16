import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button'
import { Player } from '@lottiefiles/react-lottie-player';
import { ArrowLeft  } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();
   const goHomeHandler = () => {
      navigate("/")
   }
   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="gap-20 justify-center items-center">
            <Player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_suhe7qtm.json" style={{ height: '400px', width: '400px'}}></Player>
            <div className="flex flex-col gap-6 items-start">
               <h1 className="text-3xl font-bold uppercase">Page not found</h1>
               <p className="text-lg text-zinc-500">The page you  are looking for  does not exist. <br/> It might have been removed or is currently unavailable.</p>
               <Button className="px-6 flex gap-2.5 items-center" onClick={goHomeHandler}>
                   <ArrowLeft color="#fff" weight="bold" size={20} />
                  Go to Home
               </Button>
            </div>
         </Container>
      </div>
   );
}
 
export default NotFound;