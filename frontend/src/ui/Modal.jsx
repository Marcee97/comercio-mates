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
          <img src={items.imagen} alt="imagen de producto modal" />
          <p  className="nombre-producto-modal">{items.nombre}</p>
          {items.stock > 0 ? (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Disponible
                  </p>
                ) : (
                  <p style={{ color: "red", fontWeight: "bold" }}>Agotado</p>
                )}
                
          <strong>{items.precio}</strong>
          <button onClick={clickClose}>Cerrar</button>
          <button onClick={()=> addCarrito(items)}>Agregar al carrito</button>
        </div>
      ))}
    </>
  );
};
