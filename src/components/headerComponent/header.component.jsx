import { Link } from 'react-router-dom';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';

import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const match = useMatch("write-the-url-you-want-to-match-here");
  
  return (
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
        <div className="nav-container w-container">
            <a href="index.html" aria-current="page" className="brand w-nav-brand w--current">
                <div className="brand-logo">async<span className="text-span">.</span></div>
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
            {location.pathname == '/' ? (
                <Link to='login' className="nav-link login w-nav-link">Login</Link>
            ) : (
                <Link to='/' className="nav-link login w-nav-link">Home</Link>
            )}
                <a href="#top" data-w-id="3c79f708-d66c-1e9b-7848-197101407da7" className="nav-link w-nav-link">Join for FREE →</a>
            </nav>
            <div className="menu-button w-nav-button">
                <div className="icon w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
    );
}

export default Header;
