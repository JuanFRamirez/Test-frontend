import React from 'react';

const Footer = ()=>{
    return(
        <div className="footer row w-100">
            <div className="footer-menu">
                <div className="f-menu-item">
                    <h4>General</h4>
                    <a href="#">Tarifas</a>
                    <a href="#">Productos Restringidos</a>
                    <a href="#">Calculadora</a>
                </div>

                <div className="f-menu-item">
                    <h4>Ayuda</h4>
                    <a href="#">Compras en WCE</a>
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Contáctanos</a>
                </div>

                <div className="f-menu-item">
                    <h4>Promociones</h4>
                    <a href="#">Puntos WCEicons</a>
                    <a href="#">Refiere a tus amigos</a>
                </div>

                <div className="chat-box">
                <i className="fas fa-comment-alt"></i> <span>Chat</span>
                </div>

            </div>
            <div className="copyright">
                <p>Todos los Derechos Reservados cworld Cargo Express Corp | <span><a href="#">Términos y Condiciones</a></span></p>
            </div>
        </div>
    )
}

export default Footer