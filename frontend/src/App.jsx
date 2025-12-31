import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Fileform from './pages/Fileform'
import Filelist from './pages/Filelist'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import { FileProvider } from './context/Filecontext'

function App() {

  return (
    <>
      <FileProvider>
        <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Fileform />} />
            <Route path="/files" element={<Filelist />} />
          </Routes>
        </div>
        </Router>
      </FileProvider>
    </>
  )
}

export default App
