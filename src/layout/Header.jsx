import { Link } from 'react-router-dom';
import Logo from './../assets/icons/logo.png';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
