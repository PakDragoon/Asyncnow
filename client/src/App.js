import React, { Fragment } from "react"
import Header from "./components/headerComponent/header.component"
import Footer from "./components/footerComponent/footer.component"
import MainRoutes from "./routes"
import ".//assets/css/normalize.css"
import ".//assets/css/asyncnow.webflow.css"
import ".//assets/css/webflow.css"

function App() {

  return (
    <div>
      <Fragment>
        <Header />
          <MainRoutes />
        <Footer />
      </Fragment>
    </div>
  )
}

export default App
