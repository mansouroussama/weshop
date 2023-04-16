import Container from '../../components/ui/Container'
import Heading from '../../components/ui/Heading'
import Item from '../../components/ui/Item';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { v4 as uuidv4 } from 'uuid';
import SearchLoader from '../../utils/skeletons/SearchLoader';

const Search = () => {
   const location = useLocation();
   const [loaded, setLoaded] = useState(false);
   const [data, setData] = useState({});
   console.log(location)
   const queryParams = new URLSearchParams(location.search)
   const searchQuery = queryParams.get('query')
   console.log(searchQuery)
   // 
   useEffect(() => {
      const fn = async () => {
         setLoaded(false);
         const res = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
         const data = await res.json();
         setData(data);
         setLoaded(true);
         console.log(data)
      }
      fn()
   }, [searchQuery])
   const searchResults = loaded && 
   <>
      <Heading className="font-semibold text-xl">Search results for: <span className="text-zinc-400/75">{searchQuery}</span></Heading>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6">
         {data.products.map((item) => {
            const key = uuidv4();
            return <Item data={item} key={key}/>
         })}
      </div>
   </>
   const noResults = <div className="flex flex-col justify-center items-center gap-8 text-center mt-4 mb-6">
      <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_b4hn3bqt.json" style={{ height: '170px', width: '170px', margin: '0'}}></Player>
      <div className="flex flex-col gap-2">
         <p className="text-3xl font-bold">No results found</p>
         <p className="text-lg font-normal text-zinc-400/75">Try seaching again</p>
      </div>
   </div>

   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="flex-col gap-8">
            {!loaded && <SearchLoader/>}
            {loaded && data.total === 0 ? noResults : searchResults}
         </Container>
      </div>
    );
}
 
export default Search;