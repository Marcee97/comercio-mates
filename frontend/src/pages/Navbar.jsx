import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = ({visible}) => {






  return (
    <nav className={visible ? 'nav-navbar' : 'display-none'}>
      <Link to={"/"} className='logo-navbar'><h2>LOGO</h2></Link>
      <ul className='ul-navbar'>
        <Link to={"/store"} className='li-navbar'>Store</Link>
        <li className='li-navbar'>About</li>
        <li className='li-navbar'>Pedidos (0)</li>
      </ul>
    </nav>
        
  )
}
