import classNames from "classnames";

const Container = (props) => {
   const className = classNames('max-w-screen-xl mx-auto flex px-5', props.className)
   return (
      <div className={className}>{props.children}</div>
   )
}
export default Container;