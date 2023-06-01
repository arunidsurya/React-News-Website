import React from 'react'
import Header from './components/header/Header'
import "./App.css"
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


const App = () => {
  return (
    <> 
     <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path='/' Component={Homepages}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 
