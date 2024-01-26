// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ExpressionEngineForm from './Components/ExpressionEngineForm';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expression-engine" element={<ExpressionEngineForm />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
