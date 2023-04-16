import classNames from "classnames";

const Heading = (props) => {
   const className = classNames("text-2xl font-bold", props.className)
   return ( 
      <h1 className={className}>{props.children}</h1>
    );
}
 
export default Heading;