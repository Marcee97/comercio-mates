import { useEffect, useRef, useState } from "react";
import "../styles/about.css";
import { Carrousel } from "../ui/Carrousel";

export const About = () => {
  const hoverRef = useRef(null);
  const hoverRef2 = useRef(null);
  const hoverRef3 = useRef(null);
  const [onHover, setOnHover] = useState(true);
  const [onHover2, setOnHover2] = useState(true);
  const [onHover3, setOnHover3] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => setOnHover((prevHover) => !prevHover);
    const handleMouseOver2 = () => setOnHover2((prevHover2) => !prevHover2);
    const handleMouseOver3 = () => setOnHover3((prevHover3) => !prevHover3);

    const hoverElement = hoverRef.current;
    const hoverElement2 = hoverRef2.current;
    const hoverElement3 = hoverRef3.current;

    if (hoverElement) {
      hoverElement.addEventListener("mouseenter", handleMouseOver);
      hoverElement.addEventListener("mouseleave", handleMouseOver);
    }
    if (hoverElement) {
      hoverElement2.addEventListener("mouseenter", handleMouseOver2);
      hoverElement2.addEventListener("mouseleave", handleMouseOver2);
    }
    if (hoverElement3) {
      hoverElement3.addEventListener("mouseenter", handleMouseOver3);
      hoverElement3.addEventListener("mouseleave", handleMouseOver3);
    }
    return () => {
      if (hoverElement) {
        hoverElement.removeEventListener("mouseenter", handleMouseOver);
        hoverElement.removeEventListener("mouseleave", handleMouseOver);
      }
      if (hoverElement2) {
        hoverElement2.removeEventListener("mouseenter", handleMouseOver2);
        hoverElement2.removeEventListener("mouseleave", handleMouseOver2);
      }
      if (hoverElement3) {
        hoverElement3.removeEventListener("mouseenter", handleMouseOver3);
        hoverElement3.removeEventListener("mouseleave", handleMouseOver3);
      }
    };
  }, []);

  return (
    <section className="about">
      <h2 className="titulo-fondo">About</h2>
      <h3>Sobre Nosotros</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque, voluptas adipisci nobis quod saepe quidem non ea nulla error expedita fuga, laudantium molestiae rerum minus laborum fugit quas itaque!</p>
      
      <div className="contenedor-about">

        <article className="article-imagen-texto">
          <img
            src="https://i.pinimg.com/564x/13/a2/1f/13a21fd36a897a800f3790ffef73e45e.jpg"
            className="img-about"
            alt="foto de about"
            ref={hoverRef}
          />
          <p
            className={
              onHover ? "texto-de-la-foto" : "texto-de-la-foto activo-about"
            }
          >
            Podes encontramos en Cordoba.
          </p>
        </article>

        <article className="article-imagen-texto">
          <img
            src="https://i.pinimg.com/236x/8e/26/a6/8e26a6bb3a7174fdc2bfb1350bb0b39a.jpg"
            className="img-about"
            alt="foto de about"
            ref={hoverRef2}
          />
          <p
            className={
              onHover2 ? "texto-de-la-foto" : "texto-de-la-foto activo-about"
            }
          >
            Todo lo que nececitas para tomar los mejores mates
          </p>
        </article>

        <article className="article-imagen-texto">
          <img
            src="https://i.pinimg.com/736x/b5/4b/88/b54b8800f051483604429e090a3ce5b4.jpg"
            className="img-about"
            alt="foto de about"
            ref={hoverRef3}
          />
          <p
            className={
              onHover3 ? "texto-de-la-foto activo-about" : "texto-de-la-foto "
            }
          >
            Hacemos envios a todo el pais
          </p>
        </article>
      </div>

      <div className="seccion-2"></div>
    </section>
  );
};
