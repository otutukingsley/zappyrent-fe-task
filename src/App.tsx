import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Modal from "./components/Modal"
import Home from "./screens/Home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="img/:id" element={<Modal />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
