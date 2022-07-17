import React from 'react'


export const Contacto = () => {
  return (
    <div className='page-contacto'>

      <div className='cabecera-contacto'>

        <h1 className='heading'>Contacto</h1>

        <form className='contact' action='mailto:pablocorrea34@gmail.com'>
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellidos' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Motivo de contacto' />
          <input type="submit" value="Enviar" />

        </form>
      </div>

      <div className='contactos'>

        <div className='linkedin'>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIie2Wv0oDQRCHv1gEIjYWEdQzKKQTH8R/Mfa+gXiSznewslPUxlKwUGLnA/gI2gRBxdacnckZi93jNuve3d5eFIv8YAiZ28w3M3c3GRjrj1TKcbYGbAHrwCLgSf8L8AS0gWvgeVTJzQMnQB8YZFgIXMrECqkJfFgAdQuAhit0H1FBXqhavZ8X2iwIVeHWlXv8bO8d0ALuHeABMGcDPjf8eFpeW3as/DQLWsP89O4AZeDAEdwnfv2M8h0D29iuCprQwKsJCZUU030zwCGiW5PANvBuiLGWVvFjQraqdJ9p+rUMMR7SwIEDGOAIuCLuYN0QIxg1eAr4kr669JWzwPo9fkvLKkEV4nZX5Oen4dxrGrjjALbVUGwdfPuL4HbaxQXMA0SV7qsqvhXDuQHQI2OAAJwZwEXtOAsK4o8/6el2sS4wawMGMcFsNo4sC4FNW2gkn+KLwF5eaKQGbm3vAhuu0EhVxEjsWQBD4AKLe5pnvfWI19slhtfbDmIG3MjvY/0ffQNl4j4IlhKkNgAAAABJRU5ErkJggg==' alt="linkedin" />
          <a href="https://www.linkedin.com/in/pablo-correa-69a876191/" target='_blank' rel="noreferrer">Linkedin</a>
        </div>

        <div className='github'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVRIidXVMU8UQRjG8R93UlwDdIaCwk4kMUD8CCaIFyIBeyz9FEYh0WBpaSehpLCAws7almgEbSwEpZDYQMVBsbtheZm9vbuOJ5lsdt/n+c/O7OwMN11DNfUmHuEpZjCRZw7xBdv4iLNBOp/DHs5r2k+0+wEP4RU6PcCL1sFb9TMC1voAx7ZWB2+HwCwWsJuA7WMZd8Pz+Sr4Ldl8ls3Dea2F6fzawn2M5rVmyHwv5a5oMfGWd+qGjNuJ3EJRbJSMyyH4Q7Yc6/RfNl1lRRb4Gt5iqQd4oSchu5syHQXTSB8djITsv6JQnqKGwRXXfysF/RVMlcstocfh/m/K9N7VYf7GZA/wezgI2a2Ucd715XaK1zkkagpvck/MraQ6aLj8Y19gpxR4l/BvJMDn+KP0DaIeyrbeE4zjUx4YrxhBqoNnVfBCL3Pjeo2vkYB/qIMXWpVtwd/wuYuvDN9UsQdVaU62cXU7rTo4xnM9ngVRTTzoUm9jbBDwzdEFbw2dumnXbXIAAAAASUVORK5CYII=" alt="github" />
          <a href="https://github.com/pablocorrea23" target='_blank' rel="noreferrer">Github</a>
        </div>

        <div className='cv'>
          <a href="./cvpablo.pdf" download='cv Pablo Correa'>Descargar cv</a>
        </div>


        <div className='mail'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABu0lEQVRYhe2Vv0tCURTHPzTYL2kPi5bSkggiaKh/olEopKS9vyKaWxsqtEWlqf6IpobKHFoaskWksJI2GzwPr9d7r76nDxr8wuHCOef7PV/vO+8JI4zwzzAHFIE6UAXyQGIAvYRoVEXzGlhyDa8BTS1+gIMAw/eFq+vVgJiJUJSGG2mYBS4U4iUw3cfgKen1eOeiFQNuJZc3EetS1N2p7ktA0jE8CTxpHBXzkvs0kU0ENV+S8xtIG/rSUlN7XXrWQpbOq/byk8CZoW8CODXk9UF6n9VAE3gEli2OM7SX60HCW9aM5ZeuiKbt0XQQnuX8AnYthFWgrNTKkjPp7YmWqu00EAVymlsTIQpcSUQdel7kpK+nAQ+HQEPJx00kC+IKryFatjnOwpqSrwOpPoanaL/STdHoNcdZ0K8yS+tjo2Oczi0P/Bra8mna238PLCo9C8Cd1H6BozAMAKwDL3Q+kh3gQ3KvwKYPPd8GAGaAAt1XXZCaX73AhDStDfeufFA9/wRgQ2IoekEMuNCX3lgA4aFCNfAu51aI87blrJiKJ3RvtvPfqwdcWscmQkRMVEI08CbDIwH0RhghHPwBaDIDg7X/kSgAAAAASUVORK5CYII=" alt="mail" />
          <h4>pablocorrea34@gmail.com</h4>
        </div>

        <div className='telefono'>
        <img className='telefono-foto' src={require('../images/telefono1.png')} alt="imagen" />
          <h4>+54 9 264 4511786</h4>
        </div>

      </div>
    </div>
  )
}
