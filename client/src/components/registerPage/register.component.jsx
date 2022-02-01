import React from "react"
import "../../assets/css/normalize.css"
import "../../assets/css/asyncnow.webflow.css"
import "../../assets/css/webflow.css"
import { Helmet } from "react-helmet"
const axios = require("axios")
const title = "Register"

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      company: "",
      password: "",
      loading: false,
      success: false,
      fail: false,
      message: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(`${name}: ${value}`)
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const name = this.state.name
    const email = this.state.email
    const company = this.state.company
    const password = this.state.password
    console.log(`name: ${name} | email: ${email} | company: ${company} | password: ${password}`)
    this.setState({ loading: true })
    const data = {
      name,
      email,
      company,
      password,
    }
    axios({
      method: "post",
      url: "http://localhost:3000/users",
      data: {
        name,
        email,
        company,
        password,
      },
    })
      .then((res) => {
        console.log(res)
        this.setState({ loading: false, success: true, message: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
        this.setState({ loading: false, fail: true })
      })
  }
  showMsg() {
    if (this.state.loading) {
      return <p>Loading . . .</p>
    } else {
        <p>{this.state.message}</p>
    }
  }
  render() {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="section-white wf-section">
          <div className="hero-container fixed w-container">
            <div className="w-row">
              <div className="column-2 login w-col w-col-6">
                <h1 className="heading-hero">Let&#x27;s get started!</h1>
                <div className="text-block-3">We need some details to set up your FREE account.</div>
                <div className="form-block w-form">
                  <form id="registerForm" onSubmit={this.handleSubmit} name="registerForm" data-name="Email Form" method="get" className="form login app">
                    <label htmlFor="Name" className="field-label">
                      FULL NAME
                    </label>
                    <input value={this.state.name} onChange={this.handleChange} type="text" className="text-field w-input" maxLength="256" name="name" data-name="Name" placeholder="Ada Lovelace" id="name" />
                    <label htmlFor="Email-2" className="field-label">
                      WORK EMAIL
                    </label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="text-field w-input" maxLength="256" name="email" data-name="Email 2" placeholder="a.lovelace@google.com" id="email" />
                    <label htmlFor="Name-2" className="field-label">
                      COMPANY NAME
                    </label>
                    <input value={this.state.company} onChange={this.handleChange} type="text" className="text-field w-input" maxLength="256" name="company" data-name="Name 2" placeholder="Google Inc." id="company" />
                    <label htmlFor="Password" className="field-label">
                      PASSWORD
                    </label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" className="text-field w-input" maxLength="256" name="password" data-name="password" placeholder="***********" id="password" />
                    <input type="submit" className="button w-button" value="Register Now →" />
                  </form>
                  {this.showMsg()}
                  <div className={`${this.state.success ? 'w-form-done' : '.w-condition-invisible'}`}>
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className={`${this.state.fail ? 'w-form-fail' : '.w-condition-invisible'}`}>
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div className="column-16 w-col w-col-6"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Register
