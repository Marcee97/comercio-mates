import { Link } from 'react-router-dom'
import { Navbar } from "../pages/Navbar";
import '../styles/home.css'
export const Home = () => {

  
  return (
    <>
      <Navbar visible={true}/>
    <section className="home">
        <div className='contenedor-card'>
            <h2 className='titulo-card-home'>Encontra de todo mates</h2>
            <p>Lorem ipsum dolor sit amet uas sunt consequuntur, alias explicus!</p>
            <Link className='button-home'>Ver Todo <span className="material-symbols-outlined arrow-flecha">
arrow_forward
</span></Link>
        </div>
    </section>
    </>
  )
}
