import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
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
          <Route path='/curriculum' element={<Curriculum />} />
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
