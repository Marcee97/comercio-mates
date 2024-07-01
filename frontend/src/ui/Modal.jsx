import "../styles/modal.css";
export const Modal = ({ children, modalOpen, itemSelected, clickClose }) => {
  return (
    <>
      {modalOpen && itemSelected && (
        <article className="article-modal">
            <div className="contenedor-modal">


          <img src={itemSelected.imagen} alt="Imagen producto modal" className="img-modal" />
          <div className="data-articulo-modal">

          <p>{itemSelected.nombre}</p>
          {itemSelected.stock > 0 ? <p style={{color: "green"}}>Disponible</p> : <p style={{color: "red"}}>Agotado</p>}
          <strong className="precio-modal">{itemSelected.precio}</strong>
          <div className="botonera-modal">

          <button className="button-modal">Comprar Ahora</button>
          <button className="button-modal" onClick={clickClose}>x</button>
          </div>
          </div>
            </div>
        </article>
      )}
    </>
  );
};
