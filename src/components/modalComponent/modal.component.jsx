import React from 'react';
import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'

function ModalComponent() {
  return (
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
                        <a data-w-id="87ebe9d9-68f2-8d77-ddec-e4e3da0d8fe5" href="#top" className="link-7">Erm, no thanks!</a>
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
    );
}

export default ModalComponent;

