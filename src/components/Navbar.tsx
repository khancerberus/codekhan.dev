import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logoK.avif'

export const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className="navbar-brand">
          <Link to="/" >
            <img src={logo} alt="logo" width={100} />
            <h1>CODEKHAN.DEV</h1>
          </Link>
        </div>
        <div className="navbar-menus">
          <ul>
            <li>
              <Link to="/projects">PROYECTOS</Link>
            </li>
            <li>
              <Link to="/about">ACERCA DE MI</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}