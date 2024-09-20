import React from 'react'
import "./App.css"
import HomePage from './HomePage';
import Address from './Address'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App(){
  return(
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/address" element={<Address/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
