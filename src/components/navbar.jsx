import React, {Component} from "react";

class Navbar extends Component {
  state = {  } 
  render() { 
    return <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Willkommen in meiner Kuchenwelt!</a>
      </div>
    </nav>;
  }
}
 
export default Navbar;