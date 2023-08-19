/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export const SideBar = () => {

  const [open, setOpen] = useState(false)
  
  const handleDrawerClick = () => {
    setOpen(!open);
  }

  const handleLinkClick = () => {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <nav className={`sm:fixed sm:w-64 sm:h-screen sm:flex sm:justify-center sm:bg-zinc-900 fixed bg-zinc-900 z-50 transition-all
                     ${(open) ? 'h-screen w-screen opacity-95' : 'h-20 w-screen opacity-100'}`}>
        <button className='absolute top-3 right-3 bg-zinc-700 p-3 rounded-sm text-white' onClick={handleDrawerClick}>=</button>
        <div className={`sm:w-40 sm:h-screen sm:flex sm:flex-col sm:justify-between sm:items-start flex flex-col h-[90%] justify-center items-center text-lg text-center pb-24
                         ${(open) ? '' : 'hidden'}`}>
            {/* Cajita del logo */}
            <div className="sm:mt-14 sm:w-36 sm:flex-1 w-24 flex flex-col">
                <Link to="/"><img src='../src/img/logo.jpg' alt="img"/></Link>
                {/* Cajita del menu */}
                {/* md:flex significa que cuando se este en md size en el view dejara de ser hidden
                y se mostrara como display flex, */}
                <div className="sm:flex sm:flex-col sm:flex-1 sm:antialiased sm:text-left mt-10 flex flex-col">
                    <NavLink  onClick={handleLinkClick}
                              className={({isActive}) => `nav-item nav-link ${isActive ? 'text-white bg-zinc-700 px-2 rounded-tr-lg transition-all mb-2' : 'mb-2 text-white'}`} to="/" >Inicio</NavLink>
                    <NavLink  onClick={handleLinkClick}
                              className={({isActive}) => `nav-item nav-link ${isActive ? 'text-white bg-zinc-700 px-2 rounded-tr-lg transition-all mb-2' : 'mb-2 text-white'}`} to="/portfolio" >Portafolio</NavLink>
                </div>
            </div>
            {/* Cajita de los links externos y el about */}
            <div className="sm:mb-12 sm:flex sm:flex-row sm:antialiased sm:items-end sm:text-left flex">
              {/* links de texto */}
              <div className="flex flex-col">
                <NavLink  onClick={handleLinkClick}
                          className={({isActive}) => `nav-item nav-link ${isActive ? 'text-white bg-zinc-700 mb-2 rounded-tr-lg transition-all' : 'px-2 mb-2 text-white'}`} to="/about" >Sobre mi</NavLink>
                <NavLink  onClick={handleLinkClick}
                          className={({isActive}) => `nav-item nav-link ${isActive ? 'text-white bg-zinc-700 rounded-tr-lg transition-all' : 'px-2 text-white'}`} to="/contact" >Contacto</NavLink>
                {/* links con iconos */}
                <div className="sm:flex sm:flex-row sm:items-center sm:mt-1 sm:gap-2 flex justify-around mt-2"> 
                  {/* <!-- Linkedin --> */}
                  <a href="https://www.linkedin.com/in/fabricio-rivera/" target="blank" className="p-0.5 fill-[#0077b5]"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    // fill="currentColor"
                    // style={{color: '#0077b5'}}
                    viewBox="0 0 26 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg></a>
                  {/* <!-- Instagram --> */}
                  <a href="https://www.instagram.com/fabricio_riv/" target="blank"  className="p-0.5 fill-[#c13584]"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    // fill="currentColor"
                    // style={{color: '#c13584'}}
                    viewBox="0 0 25 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg></a>
                  </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
