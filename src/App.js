import React from 'react'
import Home from "./components/Home/Home"
import Sport from "./components/Sport/Sport"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
   
   return (
      <Router>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/sport' element={<Sport/>} />

         </Routes>
      </Router>
      
   )
}

export default App;
