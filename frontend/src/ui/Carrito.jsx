import { useEffect, useState } from "react";
import "../styles/carrito.css";
export const Carrito = ({despliego, infoCarrito, totalItems}) => {
 
const [infoProducto, setInfoProducto] = useState([])
const [carritoCloseOpen, setCarritoCloseOpen] = useState(despliego)



useEffect(()=> {
totalItems(infoCarrito.length)
},[infoCarrito])


useEffect(()=> {
setInfoProducto(infoCarrito)
},[infoCarrito])


useEffect(()=> {
  setCarritoCloseOpen(prevCarritoOpen => (!prevCarritoOpen))
  console.log(carritoCloseOpen, 'useEfect')
  }, [despliego])
  

const clickClose = () => {
setCarritoCloseOpen(prevClose => (!prevClose))
  console.log(carritoCloseOpen)
}
  return (
    <>
     <div className={carritoCloseOpen ? 'carrito' : 'carrito is-open'}>
     <button onClick={clickClose}>Cerrar</button>

      <div className="contenedor-carrito">

      {infoProducto.length > 0 ? (infoProducto.map((items, index) => (
        <div key={index} className="contenedor-articulos-carrito">
          <img src={items.imagen} className="img-carrito" alt="foto producto añadido a carrito" />
          <div className="contenedor-descripcion-carrito">

          <p>{items.nombre}</p>
          {items.stock > 0 ? (<p style={{color: "green"}}>Disponible</p>): (<p style={{color: "red"}}>Agotado</p>)}
          <strong>{items.precio}</strong>
  <button className="button-consulta-carrito">Consultar<i className="fa-brands fa-whatsapp icono-carrito"></i></button>
  <button className="button-consulta-carrito">Eliminar</button>
          </div>
        </div>
      ) )
    ) : (
      <div className="contenedor-vacio-carrito">
        <h3>No tienes productos en tu carrito</h3>
        <div className="contenedor-redes-carrito">

        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    )}

      </div>
     </div>
    </>
  );
};
