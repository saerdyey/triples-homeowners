import React from 'react';
import {Link} from 'react-router-dom'
import '../static/Nav.css'

const Nav = () => {
  return (
    <div id="Nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <Link to="/" className="navbar-brand" id="logo">
          {/* <img src={logo} alt=""/> */}
          <span className="tripleS">SSS North Fairview Homes</span> 
        </Link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link">Home<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link to="/village" className="nav-link">The Village<span class="sr-only"></span></Link>
            </li>
            <li class="nav-item active">
              <Link to="/officials" className="nav-link">Officials<span class="sr-only"></span></Link>
            </li>
            <li class="nav-item active">
              <Link to="/forms" className="nav-link">Forms<span class="sr-only"></span></Link>
            </li>
            <li class="nav-item active">
              <Link to="/contact-us" className="nav-link">Contact Us<span class="sr-only"></span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
