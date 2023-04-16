import { Link } from "react-router-dom";

const CategoryItem = (props) => {
   // console.log(props.imgLink)
   return ( 
      <div className="flex flex-col flex-auto overflow-hidden">
         <Link to={`/categories/${props.link}`} className="block hover:no-underline">
            <div className="h-48 bg-zinc-100/75 flex justify-center items-end group overflow-hidden">
               <img src={props.imgLink} alt="category" className="h-36 -translate-y-5 group-hover:scale-110 origin-bottom transition-transform duration-300 mix-blend-multiply"/>
            </div>
            <div className="py-5 text-center">
               <h2 className="font-medium text-lg">{props.title}</h2>
            </div>
         </Link>
      </div>
    );
}
 
export default CategoryItem;