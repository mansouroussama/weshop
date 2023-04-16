import classNames from "classnames";

const ButtonAlt = (props) => {
   const className = classNames('p-3.5 bg-zinc-100 text-zinc-900 rounded', props.className)

   return (
      <button className={className} onClick={props.onClick} type={props.type || 'button'}>{props.children}</button>
   );
}
 
export default ButtonAlt;