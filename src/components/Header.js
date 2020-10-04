import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>{
   
    return (
        <div className="stk">
        <div className="col w-100 menu-container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
         </button>  
        <nav className="menu row navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav">
                <li className="menu-item nav-item">Mis paquetes</li>
                <li className="menu-item nav-item"><span>Ayuda</span> <i className="fas fa-angle-down"></i></li>
                <li className="menu-item nav-item"><i className="fas fa-user"></i> <span> user </span> <i className="fas fa-angle-down"></i></li>
                <li className="menu-item nav-item"> <i className="fas fa-shopping-cart"></i> <span> Español </span> <i className="fas fa-angle-down"></i></li>
            </ul>
            </div>
        </nav>   
        <div className="logo-container row w-100">
            <Link to='/'><h1>WCE|<span>BOXES</span></h1></Link>
            <div className="buttons">
               <button className="btn btn-warning"><Link to="/contactos">Compra con Nosotros</Link></button>
                <button className="btn btn-primary-color">Prealerta tus Paquetes</button>
                <span><i className="fas fa-envelope"></i> Mensajes <i className="fas fa-angle-down"></i></span>
            </div>
        </div>
        <div className="menu-last-row">
            <h2>Casillero N:1234567890</h2>
        </div>
    </div>
    </div>
    )
}

export default Header;