import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = ({carrito, totalItems}) => {





  return (
    <>
    <nav className='nav-navbar'>
      <Link to={"/"} className='logo-navbar'><h2>LOGO</h2></Link>
      <ul className='ul-navbar'>
        <Link to={"/store"} className='li-navbar'>Store</Link>
        <li className='li-navbar'>About</li>
        <li className='li-navbar' onClick={carrito}>Pedidos ({totalItems})</li>
      </ul>
    </nav>
    </>
  )
}
