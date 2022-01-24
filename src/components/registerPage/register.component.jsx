import React from 'react'
import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'
import PageTitle from '../pageTitlesComponent/pageTitles.component'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
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
    <div className="section-white wf-section">
        <div className="hero-container fixed w-container">
            <div className="w-row">
                <div className="column-2 login w-col w-col-6">
                    <h1 className="heading-hero">Let&#x27;s get started!</h1>
                    <div className="text-block-3">We need some details to set up your FREE account.</div>
                    <div className="form-block w-form">
                        <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" method="get" className="form login app">
                            <label for="Name" className="field-label">FULL NAME</label>
                            <input type="text" className="text-field w-input" maxlength="256" name="Name" data-name="Name" placeholder="Ada Lovelace" id="Name"/>
                            <label for="Email-2" className="field-label">WORK EMAIL</label>
                            <input type="email" className="text-field w-input" maxlength="256" name="Email-2" data-name="Email 2" placeholder="a.lovelace@google.com" id="Email-2"/>
                            <label for="Name-2" className="field-label">COMPANY NAME</label>
                            <input type="text" className="text-field w-input" maxlength="256" name="Name-2" data-name="Name 2" placeholder="Google Inc." id="Name-2"/>
                            <label for="Password" className="field-label">PASSWORD</label>
                            <input type="password" className="text-field w-input" maxlength="256" name="Password" data-name="Password" placeholder="***********" id="Password"/>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <a href="../app/dashboard.html" className="button w-button">Register Now →</a>
                </div>
                <div className="column-16 w-col w-col-6"></div>
            </div>
        </div>
    </div>
    );
}
}

export default Register;