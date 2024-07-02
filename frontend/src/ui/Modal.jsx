import "../styles/modal.css";
import { useState } from "react";
import { Carrito } from "../ui/Carrito";



export const Modal = ({ modalOpen, itemSelected, clickClose }) => {

  const [dataCarrito, setDataCarrito] = useState([])

  const agregarCarrito = (items)=> {
    setDataCarrito((prevCarrito) => [...prevCarrito, items])
    }

  return (
    <>
      {modalOpen && itemSelected && (
        <article className="article-modal">
          <div className="contenedor-modal">
            <img
              src={itemSelected.imagen}
              alt="Imagen producto modal"
              className="img-modal"
            />
            <div className="data-articulo-modal">
              <p>{itemSelected.nombre}</p>
              {itemSelected.stock > 0 ? (
                <p style={{ color: "green" }}>Disponible</p>
                ) : (
                  <p style={{ color: "red" }}>Agotado</p>
                  )}
              <strong className="precio-modal">${itemSelected.precio}</strong>
              <div className="botonera-modal">
                <button className="button-modal" onClick={clickClose}>
                Volver
                </button>
                <button className="button-modal" onClick={()=> agregarCarrito(itemSelected) }>Agregar Al Carrito</button>
                <button className="button-modal">Comprar Ahora</button>
              </div>
            </div>
          </div>
        </article>
      )}
    <Carrito info={dataCarrito}/>
    </>
  );
};
