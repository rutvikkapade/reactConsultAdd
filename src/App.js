import logo from './logo.svg';
import './App.css';
import React from "react";
import {Birthday} from  './components/birthday/birthday'
import { Currency } from './components/currency/currency';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  
  return (
<Router>
   <div className="navbarCustom">
     <Link className="navbarLinks" to="/">Currency</Link>
     <Link className="navbarLinks" to="/birthday">Birthday</Link>
   </div>
   <Routes>
    <Route path="/" element={<Currency/>} />
    <Route path="/birthday" element={<Birthday/>} />
   </Routes>
 </Router>
  );
}

export default App;
