import React from 'react'
import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'
import { Helmet } from 'react-helmet'

const title = 'Login'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          title:this.props.title
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
render(){
    return (
      <>
        <Helmet>
          <title>{ title }</title>
        </Helmet>
        <div className="section-white wf-section">
        <div className="hero-container fixed w-container">
          <div className="w-row">
            <div className="column-2 login w-col w-col-6">
              <h1 className="heading-hero">Welcome back!</h1>
              <div className="text-block-3">Start by logging into your async account.</div>
              <div className="form-block w-form">
                <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" method="get" className="form login">
                    <label htmlFor="Email" className="field-label">EMAIL</label>
                    <input type="email" className="text-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="a.lovelace@email.com" id="Email" required=""/>
                    <label htmlFor="Password" className="field-label">PASSWORD</label>
                    <input type="password" className="text-field w-input" maxLength="256" name="Password" data-name="Password" placeholder="***********" id="Password" required=""/>
                    <input type="submit" value="Login Now →" data-wait="Please wait..." className="submit-button login w-button"/>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <div className="div-block-54"></div>
              <div className="text-block-3">Not already a user? Then you can <a href="#" data-w-id="b5d7910a-0004-209b-d9a1-19fb8e8fe03c" className="link-3">Join for FREE</a>.</div>
            </div>
            <div className="column-16 w-col w-col-6"></div>
          </div>
        </div>
      </div>
      </>
        );
}
}

export default Login;