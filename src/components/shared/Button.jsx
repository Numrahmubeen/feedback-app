import propTypes from "prop-types"
function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button

Button.defaultProps = {
    version:'primary',
    type:'button',
    isDisabled:false
}
Button.propTypes = {
    children : propTypes.node.isRequired,
    type : propTypes.string,
    version : propTypes.string,
    isDisabled : propTypes.bool
}