import "../styles/store.css";
import { data } from "../helpers/data.js";

export const Store = () => {
 


  return (
    <section className="store">
      <p className="palabra-fondo-store">MATES 쓰라린 친구</p>

      <div className="contenedor-products">
        {data.map((items, index) => (
          <article className="articulo" key={index}>
            <div className="cont-img-articulo-store">
              <img
                src={items.imagen}
                className="img-articulo-store"
                alt="Foto producto"
              />
            </div>
            <div className="data-articulo">
              <p>{items.nombre}</p>
              {items.stock > 0 ? (
                <p style={{ color: "green", fontWeight: "bold" }}>Disponible</p>
              ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>Agotado</p>
              )}
              <strong className="precio-producto-store">${items.precio}</strong>
              <button className="button-add-store">
                Add
                <span className="material-symbols-outlined arrow-flecha-store">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="separador-products">
        
        <img
          src="https://i.pinimg.com/736x/80/e3/01/80e30144b60b9cbf1bf7aa49cf2268e9.jpg"
          alt="Foto deco separador"
          className="img-separador-store-uno img-separador"
        />
        <img
          src="/img/matelogo-removebg-preview.webp"
          alt="Foto deco separador"
          className="img-separador-store-dos img-separador"
        />
       
        <img
          src="https://i.pinimg.com/236x/30/59/65/305965082f8dfab53281e125be9152ac.jpg"
          alt="Foto deco separador"
          className="img-separador-store-tres img-separador"
        />
        <img
          src="https://i.pinimg.com/474x/38/8b/6d/388b6d7943309f3dae778212778a0489.jpg"
          alt="Foto deco separador"
          className="img-separador-store-cuatro img-separador"
        />
        <img
          src="https://i.pinimg.com/474x/49/29/56/4929561aaad26629133c262c98a2fa6a.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-cinco img-separador"
        />
        <img
          src="https://i.pinimg.com/236x/a1/d9/55/a1d9552f2f6f5178334aedae59997c4b.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-seis img-separador"
        />
        <img
          src="https://i.pinimg.com/236x/bb/4e/64/bb4e64db321d4156b662c4391758a885.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-siete img-separador"
        />
        <img
          src="https://i.pinimg.com/564x/c8/f4/95/c8f495431cffa427307edb658fa7a520.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-ocho img-separador"
        />
        
        
        
       
        <img
          src="https://i.pinimg.com/236x/91/01/ec/9101eca8f0f2a2734d802248d7a98c04.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-once img-separador"
        />
        <img
          src="https://i.pinimg.com/236x/f3/39/5b/f3395b0bc9b2f692109d72c754d1bae1.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-doce img-separador"
        />
         <img
          src="https://i.pinimg.com/736x/7a/e0/d5/7ae0d53c221519d3026addc5dec20d3b.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-diez img-separador"
        />
        <img
          src="https://i.pinimg.com/236x/2d/87/cd/2d87cd9337cffe59a0860104c6f2c6ce.jpg"
          alt="Foto deco separador store"
          className="img-separador-store-trece img-separador"
        />
      </div>
      <div className="contenedor-products">
      {data.map((items, index) => (
          <article className="articulo" key={index}>
            <div className="cont-img-articulo-store">
              <img
                src={items.imagen}
                className="img-articulo-store"
                alt="Foto producto"
              />
            </div>
            <div className="data-articulo">
              <p>{items.nombre}</p>
              {items.stock > 0 ? (
                <p style={{ color: "green", fontWeight: "bold" }}>Disponible</p>
              ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>Agotado</p>
              )}
              <strong className="precio-producto-store">${items.precio}</strong>
              <button className="button-add-store">
                Add
                <span className="material-symbols-outlined arrow-flecha-store">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
