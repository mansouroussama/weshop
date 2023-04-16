import classNames from "classnames";

const Button = (props) => {
   const className = classNames('p-3.5 bg-zinc-900 text-white font-semibold rounded', props.className)
   return (
      <button className={className} onClick={props.onClick} type={props.type || 'button'}>{props.children}</button>
   );
}
 
export default Button;