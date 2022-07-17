import React from 'react'

export const Certificados = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Certificados</h1>

      <div className='contenedor-imagenes'>
        <img className='certificado' src={require('../images/css.png')} alt="css" width={800} />
        <img className='certificado' src={require('../images/python.png')} alt="python" width={840} />
        <img className='certificado' src={require('../images/webinarjavascript.png')} alt="webinar" width={800} />
        <img className='certificado' src={require('../images/javascripteducacionit.png')} alt="educacionIt" width={750} />
        <img className='certificado' src={require('../images/basesdedatos.png')} alt="basesDeDatos" width={750} />

      </div>
    </div>
  )
}
