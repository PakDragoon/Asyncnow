import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Overlay from "react-overlay-component";

import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'

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
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
        <div className="nav-container w-container">
            <Link to="/" aria-current="page" className="brand w-nav-brand w--current">
                <div className="brand-logo">async<span className="text-span">.</span></div>
            </Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
            {location.pathname === '/thanks' ? (
                ''
            ) : (
                location.pathname === '/' ? (
                    <Link to='login' className="nav-link login w-nav-link">Login</Link>
                ) : (
                    <Link to='/' className="nav-link login w-nav-link">Home</Link>
                )
            )}
            {location.pathname === '/thanks' ? (
                <Link to="/" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" className="nav-link w-nav-link">Return Home →</Link>
            ) : (
                <a href="#top" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" onClick={() => {setOverlay(true);}} className="nav-link w-nav-link">Join for FREE →</a>
            )}
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
                            <label for="Email-2" className="field-label">YOUR EMAIL</label>
                            <input type="email" className="text-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="a.lovelace@email.com" id="Email" required="" />
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
