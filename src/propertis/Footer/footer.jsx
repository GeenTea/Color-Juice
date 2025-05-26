import './style.css';
import { Link } from 'react-router-dom';
import { changeLang } from '../../function/languege.js';

/* `const Footer = ({ lang, setLang })` is a functional component in React that is accepting props
`lang` and `setLang`. These props are being passed down to the `Footer` component from its parent
component. The `lang` prop is likely used to determine the current language setting, and the
`setLang` prop is a function that allows changing the language setting. Inside the `Footer`
component, these props can be used to display content or trigger actions based on the language
setting. */
const Footer = ({ lang, setLang }) => {
    return (
        <footer>
            <div className="container">
                <div id="title">
                    <h2>Content</h2>
                    <hr id='hrcontainer'/>
                </div>

                {/* The `<div id="contens">` section in the `Footer` component is likely intended to
                display a structured content section within the footer of a web page. Here's a
                breakdown of what this section is doing: */}
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

            {/* The code snippet you provided is creating a language toggle switch within the `Footer`
            component of a React application. Here's a breakdown of what each part of the code is
            doing: */}

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

/* `export default Footer;` is a statement in JavaScript that exports the `Footer` component as the
default export from the file. This means that when another file imports from this file, if no
specific named export is specified, the `Footer` component will be imported by default. This allows
other parts of the application to import and use the `Footer` component easily without needing to
know its specific name within this file. */
export default Footer;
