import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Route, Routes } from "react-router-dom";



export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/"element={<Home />
}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </>
  );
};
