import React from 'react';
import '../estilos/navegador.css';
import logo from '../images/logo.png';

function Navegador() {
    return (
        <header class="container-fluid">
            <nav class="row">
                <div class="col-8 col-md-4 col-lg-4 logo">
                    <img src={logo} alt="LOGO" />
                </div>
                <div class="col-12 col-md-5 col-lg-5 lista">
                    <ul>
                        
                    </ul>
                </div>
                <div class="col-12 col-md-3 col-lg-3 iconos">
                    <img src="" alt="icon-1" />
                    <img src="" alt="icon-2" />
                    <img src="" alt="icon-3" />
                </div>
            </nav>
        </header>
    );
}

export default Navegador;