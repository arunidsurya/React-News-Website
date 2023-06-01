import React from 'react'
import Header from './components/Common/header/Header'
import "./App.css"
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Homepages from './components/home/Homepages';


const App = () => { 
  return (
    <> 
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' Component={Homepages}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 
