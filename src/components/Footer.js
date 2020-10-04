import React from 'react';

const Footer = ()=>{
    return(
        <div className="footer row w-100">
            <div className="footer-menu">
                <div className="f-menu-item">
                    <h4>General</h4>
                    <a href="#tarifas">Tarifas</a>
                    <a href="#productos">Productos Restringidos</a>
                    <a href="#calculadora">Calculadora</a>
                </div>

                <div className="f-menu-item">
                    <h4>Ayuda</h4>
                    <a href="#compras">Compras en WCE</a>
                    <a href="#qa">Preguntas Frecuentes</a>
                    <a href="/contactos">Contáctanos</a>
                </div>

                <div className="f-menu-item">
                    <h4>Promociones</h4>
                    <a href="#puntos">Puntos WCEicons</a>
                    <a href="#rfiere">Refiere a tus amigos</a>
                </div>

                <div className="chat-box">
                <i className="fas fa-comment-alt"></i> <span>Chat</span>
                </div>

            </div>
            <div className="copyright">
                <p>Todos los Derechos Reservados ©world Cargo Express Corp | <span><a href="#">Términos y Condiciones</a></span></p>
            </div>
        </div>
    )
}

export default Footer