import { Link } from 'react-router-dom'
// import logo from '../assets/logoK.avif'

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-2 sm:fixed sm:left-10">
      <Link
        to="/"
        className="fader bg-[#0004] px-2 text-4xl hover:text-white sm:text-6xl xl:bg-transparent"
      >
        INICIO
      </Link>
      <Link
        to="#"
        className="fader bg-[#0004] px-2 text-4xl hover:text-white sm:text-6xl xl:bg-transparent"
      >
        PROYECTOS
      </Link>
      <Link
        to="#"
        className="fader bg-[#0004] px-2 text-4xl hover:text-white sm:text-6xl xl:bg-transparent"
      >
        CONTACTO
      </Link>
    </nav>
  )
}
