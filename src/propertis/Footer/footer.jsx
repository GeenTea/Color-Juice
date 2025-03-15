import './style.css';
import { Link } from 'react-router-dom';
import { changeLang } from '../../function/languege.js';

const Footer = ({ lang, setLang }) => {
    return (
        <footer>
            <div className="container">
                <div id="title">
                    <h2>Content</h2>
                    <hr />
                </div>
                <div id="contens">
                    <div className="card">
                        <p>Sitemap</p>
                        <ul>
                            <li><Link to='/' className='card-link'>Home</Link></li>
                            <li><Link to='/contact-us' className='card-link'>Contact us</Link></li>
                            <li><Link to='/about-us' className='card-link'>About us</Link></li>
                        </ul>
                    </div>
                    <div className="card">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <button type="button" onClick={() => setLang(changeLang(lang))}>Change Language</button>
        </footer>
    );
};

export default Footer;
