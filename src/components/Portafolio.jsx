import React from 'react'
import { trabajos } from './data/trabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
      </section>

      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>

                <div className='mask'>
                  <img src={'/images/' + trabajo.id + '.png'} alt='imagen' />
                </div>

                <span>{trabajo.categorias}</span>
                <h2>{trabajo.nombre}</h2>
                <h3>{trabajo.tecnologias}</h3>
                <h4><a href={trabajo.url} target="_blank" rel="noreferrer">Link al proyecto</a></h4>

              </article>
            );
          })
        }
      </section>




    </div>
  )
}
