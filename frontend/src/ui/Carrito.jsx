import { useRef } from 'react'
import '../styles/carrito.css'




export const Carrito = ({info}) => {

    const carritoElement = useRef(null)

    const despliego = () => {
        const elemento = carritoElement.current;

        elemento.style.transform = `translateY(${-50}%)`
    }

  return (
<div className='carrito' ref={carritoElement}>
    {info && info.map((items, index) => (
        <div key={index} className='contenedor-carrito'>
        <img src={items.imagen} alt="foto producto carrito" className='img-carrito' />
            <div className='contenedor-descripcion'>

        <p key={index}>{items.nombre}</p>
        {items.stock > 0 ? (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Disponible
                  </p>
                ) : (
                  <p style={{ color: "red", fontWeight: "bold" }}>Agotado</p>
                )}
        <strong>{items.precio}</strong>
        <button onClick={despliego}>Comprar Ahora</button>
            </div>
        </div>
        ))}
    
    </div>
  )
}
