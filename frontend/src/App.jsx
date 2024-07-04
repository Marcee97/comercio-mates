import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { Store } from "./pages/Store";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./ui/Modal";
import { Carrito } from "./ui/Carrito";
import { useState } from "react";

export const App = () => {
  const [despliegoCarrito, setDespliegoCarrito] = useState(false);
  const [modalData, setModalData] = useState([])
  const [infoCarrito, setInfoCarrito] = useState([])

  const [totalItems, setTotalItems] = useState(0)

  const desplegarCarrito = () => {
    setDespliegoCarrito(!despliegoCarrito);
  };


  const addCarrito = (items)=> {
    setInfoCarrito(prevInfoCarrito => ([...prevInfoCarrito, items]))
      }
      
  const infoModal = (items)=> {
    setModalData([])
setModalData(prevModalData => [...prevModalData, items])
  }

  return (
    <>
      <Navbar carrito={desplegarCarrito} totalItems={totalItems}/>
      <Carrito despliego={despliegoCarrito} infoCarrito={infoCarrito} totalItems={setTotalItems}/>
      <Modal itemSeleccionado={modalData} addCarrito={addCarrito}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store info={infoModal}/>} />
      </Routes>
    </>
  );
};
