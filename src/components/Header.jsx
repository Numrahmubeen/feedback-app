
function Header({text,bgColor,textColor}) {
    const headerStyle ={
        backgroundColor:bgColor,
        textColor:textColor
    }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}
Header.defaultProps = {
    text : "Feedback UI",
    bgColor:"#ff00ff",
    textColor:"#00ff00"
}

export default Header