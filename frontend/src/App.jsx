import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Fileform from './pages/Fileform'
import Filelist from './pages/Filelist'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Fileform />} />
          <Route path="/files" element={<Filelist />} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
