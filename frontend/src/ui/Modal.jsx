import { useEffect } from "react";
import { useState } from "react";
import "../styles/modal.css";



export const Modal = ({itemSeleccionado, addCarrito}) => {

const [itemInfo, setItemInfo] = useState([])
  useEffect(()=> {
    setItemInfo(itemSeleccionado)
  },[itemSeleccionado])

  const clickClose = ()=> {
    setItemInfo([])
  }
  return (
    <>
      {itemInfo && itemInfo.map((items, index) => (
        <div key={index} className="modal">
          <img src={items.imagen} className="img-modal" alt="imagen de producto modal" />
          <div className="contenedor-descripcion">

          <p  className="nombre-producto-modal">{items.nombre}</p>
          {items.stock > 0 ? (
            <p style={{ color: "green", fontWeight: "bold" }}>
                    Disponible
                  </p>
                ) : (
                  <p style={{ color: "red", fontWeight: "bold" }}>Agotado</p>
                  )}
                
          <strong>$ {items.precio}</strong>
          <button onClick={()=> addCarrito(items)} className="button-modal">Agregar al carrito</button>
          <button onClick={clickClose} className="button-modal-cerrar">Cerrar</button>
                </div>
        </div>
      ))}
    </>
  );
};
