import img from '../images/alesso-img.jpg';
import '../estilos/dj-info.css';

function DjInfo() {
    return (
        <div className="contenedor-info">
            <img className="imagen-info" src={img}/>
            <div className='texto-info'>
                <p className="info-nombre">Alesso</p>
                <p className="info-descripcion">Dj producto de musica electronica</p>
                <p className="info-texto">DJ sueco en la ciudad de estambul con 23 años de edad</p>
            </div>
        </div>
    );
}

export default DjInfo;