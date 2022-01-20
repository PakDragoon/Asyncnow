import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./assets/css/normalize.css"
import "./assets/css/asyncnow.webflow.css"
import "./assets/css/webflow.css"

import Header from "./components/headerComponent/header.component"
import Footer from "./components/footerComponent/footer.component"
import HomePage from "./components/homePage/home.component"
import Login from "./components/loginPage/login.component"
import Modal from './components/modalComponent/modal.component'
import Thanks from './components/thanksPage/thanks.component'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="modal" element={<Modal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
