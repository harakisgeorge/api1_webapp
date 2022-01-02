import React from 'react'
import Home from "./components/Home/Home"
import Sport from "./components/Sport/Sport"
import Celebrity from "./components/Celebrity/Celebrity"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
   
   return (
      <Router>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/sport' element={<Sport/>} />
         <Route path='/celebrity' element={<Celebrity/>} />

         </Routes>
      </Router>
      
   )
}

export default App;
