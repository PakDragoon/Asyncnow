import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil"
import { userDataRecoil } from "../data/atom"
import "../../assets/css/normalize.css"
import "../../assets/css/asyncnow.webflow.css"
import "../../assets/css/webflow.css"

const axios = require("axios")
const title = "Login"

function Login(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useRecoilState(userDataRecoil)
  const { userId, userName, userCompany, userRole, userEmail, userCode } = useRecoilValue(userDataRecoil)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      email: email,
      password: password,
    }
    setLoading(true)
    axios({
      method: "post",
      url: "http://localhost:3000/users/login",
      data,
    })
      .then((res) => {
        setUserData((obj) => ({
          userId: res.data.user._id,
          userName: res.data.user.name,
          userEmail: res.data.user.email,
          userCompany: res.data.user.company,
          userToken: res.data.token,
          userRole: res.data.user.role,
          userCode: res.data.user.code,
        }))
        sessionStorage.setItem("isAuthenticated", "true")
        setSuccess(true)
        setFail(false)
        setLoading(false)
        if (userRole === "Admin") {
          navigate("/admin", { replace: true })
        } else if (userRole === "User") {
          navigate("/dashboard", { replace: true })
        } else {
          navigate("/login", { replace: true })
          alert('Something went wrong, Try again.')
        }
      })
      .catch((err) => {
        console.log(err.res.data)
        setSuccess(false)
        setFail(true)
        setLoading(false)
      })
    setSuccess(false)
    setFail(true)
    setLoading(false)
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="section-white wf-section">
        <div className="hero-container fixed w-container">
          <div className="w-row">
            <div className="column-2 login w-col w-col-6">
              <h1 className="heading-hero">Welcome back!</h1>
              <div className="text-block-3">Start by logging into your async account.</div>
              <div className="form-block w-form">
                <form id="loginForm" onSubmit={handleSubmit} name="loginForm" data-name="Email Form" method="get" className="form login">
                  <label htmlFor="Email" className="field-label">
                    EMAIL
                  </label>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} className="text-field w-input" maxLength="256" name="email" data-name="email" placeholder="a.lovelace@email.com" id="email" required="" />
                  <label htmlFor="Password" className="field-label">
                    PASSWORD
                  </label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} className="text-field w-input" maxLength="256" name="password" data-name="password" placeholder="***********" id="password" required="" />
                  <input type="submit" value="Login Now →" data-wait="Please wait..." className="submit-button login w-button" />
                </form>
                <div className={`${success ? "w-form-done" : "w-condition-invisible"}`}>
                  <div className="login-success-color">Login Successful!</div>
                </div>
                <div className={`${fail ? "w-form-fail" : "w-condition-invisible"}`}>
                  <div>Wrong email or password!</div>
                </div>
              </div>
              <div className="text-block-3">
                Not already a user? Then you can{" "}
                <Link to="/register" data-w-id="b5d7910a-0004-209b-d9a1-19fb8e8fe03c" className="link-3">
                  Join for FREE
                </Link>
                .
              </div>
            </div>
            <div className="column-16 w-col w-col-6"></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
