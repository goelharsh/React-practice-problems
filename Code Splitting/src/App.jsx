import { lazy, Suspense, useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

// Simply importing the components
// import Home from './Home'
// import About from './About'

//Code splitting
const Home = lazy(()=> import("./Home"))
const About = lazy(()=> import("./About"))

function App() {

  return (
   <>
    <Router>
      <Suspense>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Suspense>
    </Router>
   </>
  )
}

export default App
