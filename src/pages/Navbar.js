import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../images/favicon.png';

const Navbar = () => {
    return ( 
        <div className='navigate'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button  id='btn' className="navbar-brand">
      <img  src={Icon} alt="cake icon" width="30" height="24" className="d-inline-block align-text-top"/>
      PlezziCakes
    </button>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        </ul>
        </div>
        
  </div>
</nav>
    </div>
    
     );
}
 
export default Navbar;