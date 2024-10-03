import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';
import Logo from './../assets/icons/logo.png';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <Link to='/' className='footer__logo'>
            <img src={Logo} alt='Logo' />
          </Link>

          <ul className='footer__list'>
            <li>
              <Link to='privacy-policy' className='footer__list-link'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='terms-of-services' className='footer__list-link'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to='contact' className='footer__list-link'>
                Contact us
              </Link>
            </li>
          </ul>

          <div className='footer__social'>
            <a href='#' className='footer__social-link'>
              <FaInstagram />
            </a>
            <a href='#' className='footer__social-link youtube'>
              <FaYoutube />
            </a>
            <a href='#' className='footer__social-link'>
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
