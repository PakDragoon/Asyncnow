import React from 'react';
import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'

function CreateVideo() {
  return (
    <div style={{opacity:'1'}} className="pup-up-modal video">
        <div className="pop-up-modal-content video step-one">
            <div className="div-block-52">
                <h1 className="heading-4 video">Start recording<span className="text-span-13"></span><br/></h1>
                <div className="text-block-14">(1/3)</div>
            </div>
            <div className="div-block-50">
                <div className="text-block-10 middle video">Click &#x27;Record Now&#x27; to start. Remember you have 60 seconds.<br/>And don&#x27;t forget to smile 😀</div>
            </div>
            <div className="div-block-2 hero video">
                <a data-w-id="a2e8d7ad-6795-c789-6128-48db5d5332d8" href="#" className="button w-button">Record Now</a>
                <a data-w-id="a2e8d7ad-6795-c789-6128-48db5d5332da" href="#" className="link-7">Cancel</a>
            </div>
        </div>
        {/* <div style="opacity:0" className="pop-up-modal-content video step-two">
            <div className="div-block-52">
                <h1 className="heading-4 video">Review video<span className="text-span-13"></span><br/></h1>
                <div className="text-block-14">(2/3)</div>
            </div>
            <div className="div-block-50 image">
                <a data-w-id="a2e8d7ad-6795-c789-6128-48db5d5332e6" href="#" className="play-button small w-inline-block">
                    <img src="../images/play-button.png" loading="lazy" width="35" height="35" alt="" className="image-5 small"/></a>
            </div>
            <div className="div-block-2 hero video">
                <a data-w-id="a2e8d7ad-6795-c789-6128-48db5d5332e9" href="#" className="button w-button">Save Video</a>
                <a data-w-id="a2e8d7ad-6795-c789-6128-48db5d5332eb" href="#" className="link-7">Cancel</a>
            </div>
        </div> */}
        {/* <div style="opacity:0" className="pop-up-modal-content video step-three">
            <div className="div-block-52">
                <h1 className="heading-4 video">Confirm details<span className="text-span-13"></span><br/></h1>
                <div className="text-block-14">(3/3)</div>
            </div>
            <div className="form-block w-form">
                <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" redirect="/app/videos" data-redirect="/app/videos" method="get" className="form join">
                    <label for="Title" className="field-label">VIDEO TITLE</label>
                    <input type="text" className="text-field w-input" maxlength="256" name="Title" data-name="Title" placeholder="Awesome video title!" id="Title" required=""/>
                    <label for="CTA" className="field-label">CTA (OPTIONAL)</label>
                    <input type="text" className="text-field w-input" maxlength="256" name="CTA" data-name="CTA" placeholder="/@alovelace/save-10%" id="CTA" required=""/>
                    <label for="Title" className="field-label">VIDEO LINK</label>
                    <div className="div-block-51">
                        <div className="text-block-12 video">/@alovelace/save-10%</div>
                        <a href="#" className="link-block-2 small w-inline-block">
                        <img src="../images/link.png" loading="lazy" sizes="100vw" alt=""/></a>
                    </div>
                    <div className="div-block-12 low">
                        <input type="submit" value="Save &amp; Copy" data-wait="Please wait..." className="submit-button w-button"/>
                        <a data-w-id="a2e8d7ad-6795-c789-6128-48db5d533307" href="#" className="link-7">Cancel</a>
                    </div>
                </form>
                <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
            </div>
        </div> */}
    </div>
    );
}

export default CreateVideo;

