import React, { Fragment } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/headerComponent/header.component"
import Footer from "./components/footerComponent/footer.component"
import HomePage from "./components/homePage/home.component"
import Login from "./components/loginPage/login.component"
import Thanks from "./components/thanksPage/thanks.component"
import Error from "./components/404ErrorComponent/error.component"
import Dashboard from "./components/dashboardPage/dashboard.component"
import DashboardMain from "./components/dashboardPage/dashboardMain/dashboardMain.component"
import DashboardVideos from "./components/dashboardPage/dashboardVideos/dashboardVideos.component"
import DashboardInsights from "./components/dashboardPage/dashboardInsights/dashboardInsights.component"
import DashboardSettings from "./components/dashboardPage/dashboardSettings/dashboardSettings.component"
import Register from "./components/registerPage/register.component"
import CheckoutComponent from "./components/checkoutPage/checkout.component"
import PaypalCheckoutComponent from "./components/paypalCheckoutPage/paypalCheckout.component"
import OrderConfirmationComponent from "./components/orderConfirmationPage/orderConfirnation.component"
import { useRecoilValue } from "recoil"
import { userDataRecoil } from "./components/data/atom"
import ThemeConfig from "./theme"
import GlobalStyles from "./theme/globalStyles"
import ScrollToTop from "./components/ScrollToTop"
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart"
import DashboardLayout from "./layouts/dashboard"
import DashboardApp from "./pages/DashboardApp"
import User from "./pages/User"
import ".//assets/css/normalize.css"
import ".//assets/css/asyncnow.webflow.css"
import ".//assets/css/webflow.css"

function DashboardL() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <DashboardLayout />
    </ThemeConfig>
  )
}

function App() {
  // const { userRole } = useRecoilValue(userDataRecoil)
  const isAuthenticated = sessionStorage.getItem("isAuthenticated")
  const isRole = sessionStorage.getItem("isRole")
  return (
    <div>
      <Fragment>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage title="Home" />} />
          <Route path="login" element={<Login title="Login" />} />
          <Route path="register" element={<Register title="Register" />} />
          <Route path="thanks" element={<Thanks title="Thanks" />} />
          {isAuthenticated && (isRole === "Admin" || isRole === "Super Admin") ? (
            <Route path="/dashboard" element={<DashboardL />}>
              <Route path="app" element={<DashboardApp />} />
              <Route path="user" element={<User />} />
            </Route>
          ) : isAuthenticated && isRole === "User" ? (
            <>
              <Route path="checkout" element={<CheckoutComponent title="Checkout" />} />
              <Route path="paypal" element={<PaypalCheckoutComponent title="Paypal Checkout" />} />
              <Route path="order" element={<OrderConfirmationComponent title="Order Confirmation" />} />
              <Route path="/dashboard" element={<Dashboard title="Dashboard" />}>
                <Route path="main" element={<DashboardMain />} />
                <Route path="videos" element={<DashboardVideos />} />
                <Route path="insights" element={<DashboardInsights />} />
                <Route path="settings" element={<DashboardSettings />} />
              </Route>
            </>
          ) : (
            <Route path="dashboard" element={<Navigate to="/login" />} />
          )}
          <Route path="*" exact={true} element={<Error title="404" />} />
        </Routes>
        <Footer />
      </Fragment>
    </div>
  )
}

export default App
