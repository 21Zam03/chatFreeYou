import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import '../estilos/chat.css';

const socket = io('http://localhost:3001');

function Chat() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const nombre = searchParams.get("nombre");
    const color = searchParams.get("color");

    const[isConnected, setIsConnected] = useState(false);

    //Controlar el valor del TextArea
    const [mensaje, setMensaje] = useState("");
    const [historialMensajes, setHistorialMensajes] = useState([]);

    useEffect(()=>{
        // Crear el socket una vez cuando se monta el componente
        socket.current = io('http://localhost:3001');

        socket.on('connect', ()=> setIsConnected(true));
        socket.on('envio_mensaje', (data) => {    
            console.log(data);
            setHistorialMensajes(historialMensajes => [...historialMensajes, data]);
        });
        return () => {
            socket.off('connect');
            socket.off('envio_mensaje');
        }
    }, []);
/*
    useEffect(() => {
        // Intenta cargar el historial de localStorage
        const historialGuardado = localStorage.getItem("chatHistorial");
        if (historialGuardado) {
            const historial = JSON.parse(historialGuardado);
            setHistorialMensajes(historial);
        }
    }, []);    
*/
    const manejarCambioMensaje = (event) => {
        setMensaje(event.target.value);
    }

    const enviarMensaje = () => {
        if (mensaje.trim() !== "") {

            socket.emit('envio_mensaje', {
                usuario: nombre, 
                nuevoMensaje: mensaje,
                color: color 
            });

            //const nuevoHistorial = [...historialMensajes, mensaje];
            //setHistorialMensajes(nuevoHistorial);

            setMensaje("");
            console.log(historialMensajes);
            //Guardar los mensajes en el localStorage
            //localStorage.setItem("chatHistorial", JSON.stringify(nuevoHistorial));
        }
    }

    const eliminarHistorial = () => {
        setHistorialMensajes([]);
        //localStorage.removeItem("chatHistorial");
    }

    return(
        <div className="container-fluid contenedor-principal">
            <div className="row justify-content-center fila-1">
                <div className="col-12 col-md-8 col-lg-8 contenedor-chat">
                    <div className="chat-texto">
                        <p className="titulo">HOLA {nombre} ESTAS AHORA TEXTEANDO CON DESCONOCIDOS - ESPERO TE DIVIERTAS</p>
                        <p>Usuario {nombre} {isConnected? 'te has conectado con exito' : 'hubo un error al conectarse al servidor'}</p>
                    </div>
                    <div className="chat-conversacion">
                        {
                            historialMensajes.length === 0? (
                                <p>No hay mensajes aun...</p>
                            ) : (
                                historialMensajes.map((men, index) => (
                                    <p key={index}><span style={{color: men.color}}>{men.usuario}: </span>{men.nuevoMensaje}</p>
                                ))
                            )
                        }
                        <button className="enviar" onClick={enviarMensaje}>Send</button>
                        <textarea value={mensaje} onChange={manejarCambioMensaje} className="input"></textarea>
                        <button className="salir" onClick={eliminarHistorial}>Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;