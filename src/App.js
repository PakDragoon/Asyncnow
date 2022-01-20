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
import Error from './components/404ErrorComponent/error.component'
import Dashboard from './components/dashboardPage/dashboard.component'
import DashboardMain from './components/dashboardPage/dashboardMain/dashboardMain.component'
import DashboardVideos from './components/dashboardPage/dashboardVideos/dashboardVideos.component'
import DashboardInsights from "./components/dashboardPage/dashboardInsights/dashboardInsights.component"
import DashboardSettings from "./components/dashboardPage/dashboardSettings/dashboardSettings.component"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="modal" element={<Modal />} />
          <Route path="error" element={<Error />} />
          <Route path='*' exact={true} element={<Error />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="main" element={<DashboardMain />}/>
            <Route path="videos" element={<DashboardVideos />}/>
            <Route path="insights" element={<DashboardInsights />}/>
            <Route path="settings" element={<DashboardSettings />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
