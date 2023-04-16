import { MagnifyingGlass } from "@phosphor-icons/react";
import Button from "../../ui/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
   const navigate = useNavigate();
   const searchRef = useRef();

   const searchHandler = (e) => {
      e.preventDefault();
      const searchQuery = searchRef.current.value;
      console.log(searchQuery)
      if (searchQuery === "") return
      navigate(`/search?query=${searchQuery}`)
      searchRef.current.value = ''
   }
   return (
      <form className="flex flex-grow" onSubmit={searchHandler}>
         <input type="text" name="search" ref={searchRef} className="w-full md:w-48 px-5 py-3 border-2 border-gray-200 outline-none focus:ring-2 focus:ring-gray-100 rounded-l" placeholder="Search..."/>
         <Button className="px-4 rounded-l-none" type="submit">
            <MagnifyingGlass color="#fff" weight="bold" size={24} />
         </Button>
      </form>
   );
}

export default SearchInput;