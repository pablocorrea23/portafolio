import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { SobreMi } from '../components/SobreMi';
import { Inicio } from '../components/Inicio';

import { HeaderNav } from '../components/layout/HeaderNav';
import { Portafolio } from '../components/Portafolio';
import { Certificados } from '../components/Certificados';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/*HEADER Y NAVEGACION*/}
      <HeaderNav />


      {/*CONTENIDO CENTRAL*/}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/certificados' element={<Certificados />} />
          <Route path='/sobreMi' element={<SobreMi />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={
            <div>
              <h1 className='page'>Error 404</h1>
            </div>
          } />
        </Routes>
      </section>



      


    </BrowserRouter>
  )
}
