import React, {useState} from 'react'
import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'
import { Helmet } from 'react-helmet'
import { authData } from './data';
// import { useRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";
const axios = require("axios")
const title = 'Login'

// class Login extends React.Component {
  function Login (props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       email: "",
    //       password: "",
    //       loading: false,
    //       success: false,
    //       fail: false,
    //       message: "",
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   };
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [success, setSuccess] = useState(false);
      const [fail, setFail] = useState(false);
      const [loading, setLoading] = useState(false);
      const handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(`${name}: ${value}`)
      }
      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          email: email,
          password: password
        }
        setLoading(true)
        axios({
          method: "post",
          url: "http://localhost:3000/users/login",
          data
          })
          .then((res) => {
            console.log(res)
            // setAuthData((obj) => ({
            //   email: res.data.data.username,
            //   token: res.data.data.token.AccessToken,
            //   UUID: res.data.data.token.AccessUuid,
            // }))
            // sessionStorage.setItem('authData', res.data.data.token.AccessToken);
            // sessionStorage.setItem('unKnown', '$2a$10$J6' + password);
            // sessionStorage.setItem('authEmail', res.data.data.username);
            setSuccess(true)
            setFail(false)
            setLoading(false)
            navigate('/', { replace: true })
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
          // this.setState({ loading: false, success: false, fail: true })
      }
      const showMsg = () => {
        if (this.state.loading) {
          return <p>Loading . . .</p>
        } else {
            <p>{this.state.message}</p>
        }
      }
// render(){
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
                <form id="loginForm" onSubmit={handleSubmit} name="loginForm" data-name="Email Form" method="get" className="form login">
                    <label htmlFor="Email" className="field-label">EMAIL</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="text-field w-input" maxLength="256" name="email" data-name="email" placeholder="a.lovelace@email.com" id="email" required=""/>
                    <label htmlFor="Password" className="field-label">PASSWORD</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="text-field w-input" maxLength="256" name="password" data-name="password" placeholder="***********" id="password" required=""/>
                    <input type="submit" value="Login Now →" data-wait="Please wait..." className="submit-button login w-button"/>
                </form>
                <div className={`${success ? 'w-form-done' : 'w-condition-invisible'}`}>
                  <div className='login-success-color'>Login Successful!</div>
                </div>
                <div className={`${fail ? 'w-form-fail' : 'w-condition-invisible'}`}>
                  <div>Wrong email or password!</div>
                </div>
                {/* {this.showMsg()} */}
              </div>
              <div className="text-block-3">Not already a user? Then you can <a href="#" data-w-id="b5d7910a-0004-209b-d9a1-19fb8e8fe03c" className="link-3">Join for FREE</a>.</div>
            </div>
            <div className="column-16 w-col w-col-6"></div>
          </div>
        </div>
      </div>
      </>
        );
// }
}

export default Login;