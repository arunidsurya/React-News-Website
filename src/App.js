import React from 'react'
import Header from './components/common/header/Header'
import "./App.css"
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Homepages from './components/home/Homepages';
import Culture from './components/culture/Culture';
import SinglePages from './components/singlePages/SinglePages';
import Footer from './components/common/footer/Footer';


const App = () => { 
  return (
    <> 
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' Component={Homepages}></Route>
          <Route path='/culture' Component={Culture}></Route>
          <Route path='/singlepage/:id' Component={SinglePages}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App 
