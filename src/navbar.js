import React, {Component} from "react";

class Navbar extends Component  {

    renderNavbar = () => {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Construction monitoring</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/register">Register <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
              </li>
  
  
            </ul>
          
          </div>
        </nav>
  
        )
     }

     render(){

        return(
            <div>
               {this.renderNavbar()}
            </div>
        )
     }

}

export default Navbar;
