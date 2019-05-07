import React from "react"

const styleNav = {
  fontSize: 20,
  fontWeight: "bold",
  color: "white",
  paddingLeft: 100,
  paddingRight: 100
}

const styleScore = {
  marginRight: 100
}


const Nav =props =>{
return(<div>
<nav className="navbar navbar-light  justify-content-between navbar-dark bg-primary" style={styleNav}>
  <p>Clicky Game</p>
  <form className="form-inline" >
    <p style={styleScore}>Score : {props.score}</p>
    <p>Highest Score : {props.highScore}</p>
  </form>
</nav>
</div>
)
}

export default Nav;