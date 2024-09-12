import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Footer from './components/Footer/Footer';
import Form from './components/Discuss_Form/Form';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App
