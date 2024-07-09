import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

export const Navbar = ({ carrito, totalItems, navVisible }) => {
  const [navOpen, setNavOpen] = useState(false);

  const clickOpen = () => {
    setNavOpen((prevOpen) => !prevOpen);
  };


  return (
    <>
      <nav className={navVisible ? 'nav-navbar' : 'nav-navbar scroll-view'}>
        <Link to={"/"} className="logo-navbar">
          <h2>LOGO</h2>
        </Link>
        <ul className="ul-navbar display-none">
          <Link to={"/store"} className="li-navbar">
            Store
          </Link>
          <Link to={'/about'} className="li-navbar">About</Link>
          <li className="li-navbar" onClick={carrito}>
            Pedidos ({totalItems})
          </li>
        </ul>
        <p className="icon-nav-mobile" onClick={clickOpen}>
        <i className="fa-solid fa-bars"></i>
      </p>

      
      <div
        className={
          navOpen ? "desplegable-nav-mobile" : "desplegable-nav-mobile activo"
          }
          >
        <p className="button-cerrar-menu-mobile" onClick={clickOpen}><span className="material-symbols-outlined icon-cerrar">
close
</span></p>
        <ul className="ul-nav-mobile">
          <li className="li-nav-mobile">Store</li>
          <li className="li-nav-mobile">About</li>
          <li className="li-nav-mobile">Pedidos</li>
        </ul>
      </div>
        </nav>
    </>
  );
};
