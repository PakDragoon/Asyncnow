import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'

function Footer() {
  return (
    <div className="section wf-section">
        <div className="w-row">
        <div className="column-20 w-col w-col-4">
            <a href="#top" className="brand-2 w-nav-brand">
                <div className="text-block-8 small">async<span className="text-span-8">.</span></div>
            </a>
            <div className="text-block-9 smalll footer">async is the 60 second video messaging tool, which enables any sales team to increase customer engagement rates. Why not try using async today to increase your team&#x27;s sales?</div>
        </div>
        <div className="column-21 w-col w-col-4">
            <div className="w-layout-grid grid-2">
            <div className="left">
                <div className="text-block-9 footer-left title">Other Stuff</div>
                <div className="text-block-9 footer-left">
                <a href="documents/async_privacy_policy.pdf" target="_blank" className="link-8">Privacy policy</a>
                </div>
                <div className="text-block-9 footer-left">
                <a href="documents/async_terms_of_use.pdf" target="_blank" className="link-8">Terms of use</a>
                </div>
            </div>
            <div className="right">
                <div className="text-block-9 footer-right title">Company</div>
                <div className="text-block-9 footer-right">
                <a href="#top" target="_blank" className="link-9">About async</a>
                </div>
                <div className="text-block-9 footer-right">
                <a href="#top" className="link-9">Contact us</a>
                </div>
                <div className="text-block-9 footer-right">
                <a href="#top" target="_blank" className="link-9">Follow us</a>
                </div>
                <div className="text-block-9 footer-right">
                <a href="#top" data-w-id="602dc436-5b7e-9846-aba1-74f04a4d73c9" className="link-9">Join for FREE</a>
                </div>
                <div className="text-block-9 footer-right">
                <a href="#top" target="_blank" className="link-9">Read about us</a>
                </div>
                <div className="text-block-9 footer-right">
                <a href="#top" data-w-id="bf7de1f9-0f9d-6867-1927-6ae4a0cd2506" className="link-9">Watch the demo</a>
                </div>
                <div className="text-block-9 footer-right">
                <a href="#top" target="_blank" className="link-9">Work with us</a>
                </div>
            </div>
            </div>
        </div>
        <div className="column-22 w-col w-col-4">
            <div className="text-block-9 smalll end">© asyncnow 2021 | Brand of JAFT Holdings Ltd | Built in Europe <span className="text-span-9">🇪🇺</span></div>
        </div>
        </div>
    </div>
    );
}

export default Footer;


