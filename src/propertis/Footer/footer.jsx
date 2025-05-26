import './style.css';
import { Link } from 'react-router-dom';
import { changeLang } from '../../function/languege.js';

const Footer = ({ lang, setLang }) => {
    return (
        <footer>
            <div className="container">
                <div id="title">
                    <h2>Content</h2>
                    <hr id='hrcontainer'/>
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
            {/* <button type="button" className='changeLangButton' onClick={() => setLang(changeLang(lang))}>Change Language</button> */}
            <center>
            <div className="switch">
                <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onClick={() => setLang(changeLang(lang))} />
                <label htmlFor="language-toggle"></label>
                <span className="on">EN</span>
                <span className="off">RU</span>
            </div>
        </center>
        </footer>
    );
};

export default Footer;
