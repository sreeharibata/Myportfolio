import React from 'react';
import Myportfolio from './components/Myportfolio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Myportfolio />
        </BrowserRouter>
    </div>
  );
}

export default App;
