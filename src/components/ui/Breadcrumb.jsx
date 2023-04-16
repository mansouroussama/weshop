import { Link } from "react-router-dom";
import formatTitle from "../../utils/formatTitle";

const Breadcrumb = (props) => {
   return ( 
      <div className="flex gap-2 text-sm uppercase font-semibold">
         <Link to="/">
            <span className="text-zinc-400/75">Home</span>
         </Link>
         <span className="text-zinc-400/75">/</span>
         <Link to={`/categories/${props.location}`}>
            <span>{formatTitle(props.location)}</span>
         </Link>
      </div>
    );
}
 
export default Breadcrumb;