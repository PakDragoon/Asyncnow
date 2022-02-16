import React, { Fragment } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//styles
import ".//assets/css/normalize.css"
import ".//assets/css/asyncnow.webflow.css"
import ".//assets/css/webflow.css"
//components
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
import ProtectedComponent from "./components/ProtectedComponent/401protected.component"
import CheckoutComponent from "./components/checkoutPage/checkout.component"
import PaypalCheckoutComponent from "./components/paypalCheckoutPage/paypalCheckout.component"
import OrderConfirmationComponent from "./components/orderConfirmationPage/orderConfirnation.component"
import { useRecoilValue } from "recoil"
import { userDataRecoil } from "./components/data/atom"
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import User from './pages/User';

function App() {
  const { userRole } = useRecoilValue(userDataRecoil)
  const isAuthenticated = sessionStorage.getItem("isAuthenticated")
  const isRole = userRole
  return (
    <div>
      {isAuthenticated && isRole === "Admin" ? (
        <ThemeConfig>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="app" element={<DashboardApp />} />
              <Route path="user" element={<User />} />
            </Route>
          </Routes>
        </ThemeConfig>
      ) : (
<Fragment>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage title="Home" />} />
            <Route path="login" element={<Login title="Login" />} />
            <Route path="register" element={<Register title="Register" />} />
            <Route path="thanks" element={<Thanks title="Thanks" />} />
            {isAuthenticated && isRole === "User" ? (
              <>
                {/* <Route path="protected" element={<ProtectedComponent title="Protected Page" />} /> */}
                <Route path="checkout" element={<CheckoutComponent title="Checkout" />} />
                <Route path="paypal" element={<PaypalCheckoutComponent title="Paypal Checkout" />} />
                <Route path="order" element={<OrderConfirmationComponent title="Order Confirmation" />} />
                <Route path="dashboard" element={<Dashboard title="Dashboard" />}>
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
      )}
        
    </div>
  )
}

export default App
