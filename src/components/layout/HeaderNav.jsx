import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <h1>Pablo Correa</h1>

        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio' className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>

                <li>
                    <NavLink to='/portafolio' className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
                </li>

                <li>
                    <NavLink to='/curriculum' className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                </li>

                <li>
                    <NavLink to='/certificados' className={({isActive}) => isActive ? "active" : ""}>Certificados</NavLink>
                </li>

                <li>
                    <NavLink to='/contacto' className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
