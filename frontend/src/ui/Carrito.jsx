import { useEffect, useState } from "react";
import "../styles/carrito.css";
import { Link } from "react-router-dom";
export const Carrito = ({despliego, infoCarrito, totalItems}) => {
 
const [infoProducto, setInfoProducto] = useState([])
const [carritoCloseOpen, setCarritoCloseOpen] = useState(despliego)



useEffect(()=> {
totalItems(infoProducto.length)
},[infoProducto])


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

const clickRemove = (items)=> {
setInfoProducto(infoProducto.filter(product => product !== items))
}
  return (
    <>
     <div className={carritoCloseOpen ? 'carrito' : 'carrito is-open'}>
     <span className="material-symbols-outlined button-cerrar-carrito" onClick={clickClose}>
close
</span>

      <div className="contenedor-carrito">

      {infoProducto.length > 0 ? (infoProducto.map((items, index) => (
        <div key={index} className="contenedor-articulos-carrito">
          <img src={items.imagen} className="img-carrito" alt="foto producto añadido a carrito" />
          <div className="contenedor-descripcion-carrito">

          <p>{items.nombre}</p>
          {items.stock > 0 ? (<p style={{color: "green"}}>Disponible</p>): (<p style={{color: "red"}}>Agotado</p>)}
          <strong>{items.precio}</strong>
  <button className="button-consulta-carrito">Consultar<i className="fa-brands fa-whatsapp icono-carrito"></i></button>
  <button className="button-consulta-carrito" onClick={()=> clickRemove(items)}>Eliminar</button>
          </div>
        </div>
      ) )
    ) : (
      <>
      <div className="contenedor-texto-carrito-vacio">

        <h3 className="titulo-carrito-vacio">El carrito está vacío</h3>
        <p className="texto-carrito-vacio-p">Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?
        </p>
        <Link to={"/store"} className="link-carrito"><button className="button-empezar">Empezar<span className="material-symbols-outlined">
arrow_right_alt
</span></button></Link>
      </div>
        
      
      <div className="contenedor-redes-carrito">

      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-tiktok"></i>
      </div>
      </>
    )}

      </div>
     </div>
    </>
  );
};
