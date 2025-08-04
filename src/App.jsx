import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { LoginSignup } from './components/pages/LoginSignup'
import { Home } from './components/pages/Home'
import { Search } from './components/pages/Search'


function App() {
    return (
      <Router>
        <Routes>
          <Route element = {<Layout/>}>
            <Route path= "/" element ={<Home/>}/>
            <Route path= "/LoginSignup" element ={<LoginSignup/>}/>
            <Route path= "/Search" element = {<Search/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
