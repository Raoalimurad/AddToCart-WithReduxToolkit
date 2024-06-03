import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import CardDetails from './components/CardDetails'
import {Routes,Route} from "react-router-dom"
import  { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/card' element={ <CardDetails/>}/>
          </Routes>      
          <Toaster />
    </div>
  )
}

export default App