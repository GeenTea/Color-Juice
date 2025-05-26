import './style.css';
import {Outlet, Link} from 'react-router-dom';
import { translation, changeLang } from '../../function/languege.js';

const Header = ({lang = 'en'}) => {
    return (
        <header>
            <div id="logo"><h1>Color</h1></div>
            <nav>
                <Link to='/' className='nav-link'>{translation[lang].header.home}</Link>
                <Link to='/contact-us' className='nav-link'>{translation[lang].header.contact}</Link>
                <Link to='/about-us' className='nav-link'>{translation[lang].header.about}</Link>
            </nav>
            <Outlet />
        </header>


    )
}

export default Header;