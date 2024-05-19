import React from 'react';
import './App.css';
import {Routes, Route, useLocation } from 'react-router-dom';
import Mahasiswa from './kontener/Mahasiswa/Mahasiswa';
import Pengelola from './kontener/Pengelola/Pengelola';
import Umum from './kontener/Umum/Umum';
import Akademitas from './kontener/Akademitas/Akademitas';
import Loginawal from './kontener/Loginawal/Loginawal';
import Pendaftaran from './kontener/Pendaftaran/Pendaftaran';

function App() {

  return ( 
    <div className='App'>
      <h1>KARTU PERPUSTAKAAN <br/> UNIVERSITAS PAPUA</h1>
      
      <Routes>
        <Route index path='/' element={<Loginawal/>}/>
        <Route path='/mahasiswa' element={<Mahasiswa/>}/>
        <Route path='/pengelola' element={<Pengelola/>}/>
        <Route path='/akademitas' element={<Akademitas/>}/>
        <Route path='/umum' element={<Umum/>}/>
        <Route path='/pendaftaran' element={<Pendaftaran/>}/>
      </Routes>
    </div>
  );
}

export default App;
