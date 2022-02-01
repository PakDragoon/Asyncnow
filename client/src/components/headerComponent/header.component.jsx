import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Overlay from "react-overlay-component";
import { Container, Row, Col } from 'react-bootstrap';

import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'
import './header.style.css'

function Header() {
    const location = useLocation();
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
        animate: true,
        clickDismiss: true,
        escapeDismiss: true,
    };
  return (
    <>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner"
        className={`w-nav ${location.pathname.match(/^.*dashboard.*$/) ? 'navbbar-app' : 'navbar'} ${location.pathname === '/checkout' || location.pathname === '/paypal' || location.pathname === '/order' || location.pathname === '/protected' || location.pathname === '/error' ? 'none' : ''}`}>
        <div className={`w-container ${location.pathname.match(/^.*dashboard.*$/) ? 'container-4' : 'nav-container'}`}>
            <Link to="/" aria-current="page" className="brand w-nav-brand w--current">
                <div className={`brand-logo ${location.pathname.match(/^.*dashboard.*$/) ? 'app' : ''}`}>async<span className="text-span">.</span></div>
            </Link>
            <nav role="navigation" className={`${location.pathname.match(/^.*dashboard.*$/) ? '' : 'nav-menu'} w-nav-menu`}>
            {location.pathname === '/' ?
                <Link to='login' className="nav-link login w-nav-link">Login</Link>
            : location.pathname === '/login' || location.pathname === '/register' ?
                <Link to='/' className="nav-link login w-nav-link">Home</Link>
            : ''
            }
            {location.pathname === '/' ?
                <a href="#top" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" onClick={() => {setOverlay(true);}} className="nav-link w-nav-link">Join for FREE →</a>
            : location.pathname === '/thanks' ? 
                <Link to="/" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" className="nav-link w-nav-link">Return Home →</Link>
            : location.pathname === '/login' ?
                <Link to="/register" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" className="nav-link w-nav-link">Register for FREE →</Link>
            : location.pathname === '/register' ?
                <Link to="/login" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" className="nav-link w-nav-link">Back to Login →</Link>
            : location.pathname === '/awesome' ?
                <a href="../index.html" class="nav-link-3 b-nav-link">Visit asyncnow.com</a>
            : location.pathname.match(/^.*dashboard.*$/) ?
                <Link to='/' className="nav-link-3 b-nav-link">Sign Out</Link>
            :   ''
            }
            </nav>
            <div className="menu-button w-nav-button">
                <div className="icon w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
    <div>
        <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
            <div style={{opacity:'1'}} className="pup-up-modal">
                <div className="pop-up-modal-content">
                    <h1 className="heading-4">Congratulations! 🎁<br/></h1>
                    <div className="text-block-3">
                        We&#x27;re skipping you to the front of our 10k+ waitlist. We&#x27;ll start by sending an invite to your email.
                    </div>
                    <div className="form-block w-form">
                        <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" redirect="/thanks" data-redirect="/thanks" method="get" className="form join">
                            <label htmlFor="Email-2" className="field-label">YOUR EMAIL</label>
                            <input type="email" className="text-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="a.lovelace@email.com" id="Email" required="" />
                            <div className="div-block-12">
                                <input type="submit" value="Join for FREE!" data-wait="Please wait..." className="submit-button w-button" />
                                <a data-w-id="87ebe9d9-68f2-8d77-ddec-e4e3da0d8fe5" href="#top" onClick={() => {setOverlay(false);}} className="link-7">Erm, no thanks!</a>
                            </div>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    </div>
    </>
    );
}

export default Header;
