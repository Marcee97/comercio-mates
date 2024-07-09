import "../styles/footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor-footer">
        <h2 className="titulo-footer">Contact</h2>
        <div className="cont-redes">
          <i className="fa-brands fa-twitter redes-footer"></i>
          <i className="fa-brands fa-instagram redes-footer"></i>
          <i className="fa-brands fa-tiktok redes-footer"></i>
        </div>
      </div>
      <div className="cont-products">
        <h2 className="titulo-products">Products</h2>
        <ul className="ul-products">
            <li>Store</li>
            <li>About</li>
            <li>Pedidos</li>
        </ul>
      </div>

      <div className="contenedor-email">
        <input
          type="email"
          className="input-email"
          placeholder="Enter Your Email"
        />
        <button className="button-email">Get Started</button>
      </div>
      <p className="copy">©COPYRIGHT 2024</p>
    </footer>
  );
};
