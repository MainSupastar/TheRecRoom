import { useState } from 'react'
import './App.css'
import { BrowserRouter,  Routes, Route} from 'react-router-dom'
import { LoginSignup } from './components/pages/LoginSignup'
import { Home } from './components/pages/Home'
import { Search } from './components/pages/Search'

/* Multi-page setup where I use BrowserRouter to create routes to each page. When a page is not matched the user will automatically be called
to the home page, by the index element.
*/

function App() {
    return (
      <div>
      <BrowserRouter>
        <Routes> 
          <Route index element = {<Home />} />
          <Route path = '/Home' element={<Home />} />
          <Route path= '/LoginSignup' element= {<LoginSignup />}/>
          <Route path = '/Search' element= {<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
