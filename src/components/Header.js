import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>{

   
    return (
    <div className="col w-100 menu-container">
        <nav className="menu row navbar-toggler">
            <ul>
                <li className="menu-item">Mis paquetes</li>
                <li className="menu-item"><span>Ayuda</span> <i className="fas fa-angle-down"></i></li>
                <li className="menu-item"><i className="fas fa-user"></i> <span> user </span> <i className="fas fa-angle-down"></i></li>
                <li className="menu-item"> <i className="fas fa-shopping-cart"></i> <span> Español </span> <i className="fas fa-angle-down"></i></li>
            </ul>
        </nav>     
        <div className="logo-container row w-100">
            <Link to='/'><h1>WCE|<span>BOXES</span></h1></Link>
            <div className="buttons">
               <button className="btn btn-warning"><Link to="/contactos">Compra con Nosotros</Link></button>
                <button className="btn btn-primary-color">Prealerta tus Paquetes</button>
                <span><i className="fas fa-envelope"></i> Mensajes</span>
            </div>
        </div>
        <div className="menu-last-row">
            <h2>Casillero N:1234567890</h2>
        </div>
    </div>
    )
}

export default Header;