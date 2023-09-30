import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Navbar from './Components/NavBar';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
