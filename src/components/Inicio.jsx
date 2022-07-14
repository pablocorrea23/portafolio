import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className="home">
      
      <h1>
        Hola! Mi Nombre es Pablo Correa. Soy desarrollador web FullStack. 
        Me apasiona el mundo de la tecnología. 
        Ofrezco mis servicios de <strong>programación </strong>y <strong>desarrollo </strong>en todo tipo de proyectos web.
      </h1>

      <h2>
        Puedo desarrollar tu sitio web, para que tengas más visibilidad y relevancia en Internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>


    </div>
  )
}
