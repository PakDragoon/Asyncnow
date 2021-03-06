import React from "react"
import { Redirect } from 'react-router'
import "../../assets/css/normalize.css"
import "../../assets/css/asyncnow.webflow.css"
import "../../assets/css/webflow.css"
import { Helmet } from "react-helmet"
const axios = require("axios")
const title = "Register"
var referralCodes = require("referral-codes")

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
      passStatusOne: true,
      passStatusTwo: true,
      message: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
      const { name, value } = event.target
      this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const codeObj = referralCodes.generate({
      count: 1,
      length: 6,
      prefix: `@${this.state.name}/`
    })
    const codeString = JSON.stringify(codeObj);
    const code = codeString.replace('["', '').replace('"]', '').replace(/\s+/g, '');
    const name = this.state.name
    const email = this.state.email
    const company = this.state.company
    const password = this.state.password
    this.setState({ loading: true })
    axios({
      method: "post",
      url: "http://localhost:3000/users",
      data: {
        name,
        email,
        company,
        password,
        code
      },
    })
      .then((res) => {
        console.log(res)
        this.setState({ name: '', email: '', company: '', password: '', loading: false, success: true, fail: false, passStatusOne: true, passStatusTwo: true, message: res.data });
        <Redirect to='/somewhere'/>
      })
      .catch((err) => {
        console.log(err.response.data)
        if(this.state.password === 'password') {
          this.setState({ loading: false, fail: false, success: false, passStatusOne: true, passStatusTwo: false })
        }
        else if((this.state.password).length < 7) {
          this.setState({ loading: false, fail: false, success: false, passStatusOne: false, passStatusTwo: true })
        }
        else {
          this.setState({ loading: false, fail: true, success: false, passStatusOne: true, passStatusTwo: true })
        }
      })
  }
  showMsg() {
    if (this.state.loading) {
      return <p>Loading . . .</p>
    } else {
      ;<p>{this.state.message}</p>
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
                      FULL??NAME
                    </label>
                    <input value={this.state.name} onChange={this.handleChange} type="text" className="text-field w-input" maxLength="256" name="name" data-name="Name" placeholder="Ada Lovelace" id="name" />
                    <label htmlFor="Email-2" className="field-label">
                      WORK??EMAIL
                    </label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="text-field w-input" maxLength="256" name="email" data-name="Email 2" placeholder="a.lovelace@google.com" id="email" />
                    <label htmlFor="Name-2" className="field-label">
                      COMPANY??NAME
                    </label>
                    <input value={this.state.company} onChange={this.handleChange} type="text" className="text-field w-input" maxLength="256" name="company" data-name="Name 2" placeholder="Google Inc." id="company" />
                    <label htmlFor="Password" className="field-label">
                      PASSWORD
                    </label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" className="text-field w-input" maxLength="256" name="password" data-name="password" placeholder="***********" id="password" />
                    <input type="submit" className="button w-button" value="Register Now ???" />
                  </form>
                  {this.showMsg()}
                  <div className={`${this.state.success ? "w-form-done" : "w-condition-invisible"}`}>
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className={`${this.state.fail ? "w-form-fail" : "w-condition-invisible"}`}>
                    <div>This email has already registered.</div>
                  </div>
                  <div className={`${this.state.passStatusOne ? "w-condition-invisible" : "w-form-fail"}`}>
                    <div>Password should not be less then 7 characters.</div>
                  </div>
                  <div className={`${this.state.passStatusTwo ? "w-condition-invisible" : "w-form-fail"}`}>
                    <div>Password can't be 'password'.</div>
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
