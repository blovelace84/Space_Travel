import React from "react"
import Header from "./components/Header"
import Home from './pages/Home'
import Spacecrafts from './pages/Spacecrafts'
import Planets from './pages/Planets'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spacecrafts" element={<Spacecrafts />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
