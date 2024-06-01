import { useState } from 'react';
import '../estilos/aviso.css';
import { Link } from 'react-router-dom';

function Aviso() {
    const[nombre, setNombre] = useState();
    const[color, setColor] = useState("red");

    const escribirNombre = (event) => {
        setNombre(event.target.value);
    }

    const escribirColor = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 contenedor-aviso">
                    <div className='container'>
                        <div className='titulo'>
                            <h1>CHAT ANONIMO</h1>
                        </div>
                        <div className='flexible'>
                            <div className='nombre-form'>
                                <label for="nombre">Nombre: </label>
                                <input value={nombre} onChange={escribirNombre} id="nombre" type="text" placeholder="¿Como te gustaria llamarte?" />
                            </div>
                            <div className='color-form'>
                                <label>Seleccione un color: </label>
                                <select onChange={escribirColor} value={color}>
                                    <option value="red">Rojo</option>
                                    <option value="green">Verde</option>
                                    <option value="blue">Azul</option>
                                    <option value="yellow">Amarillo</option>
                                </select>
                            </div>
                        </div>
                        <div className='boton-form'>
                            <button className='boton'><Link to={`/chat?nombre=${nombre}&color=${color}`}>Ingresar al chat</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aviso;