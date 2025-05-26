import './style.css';
import {Outlet, Link} from 'react-router-dom';
import { translation, changeLang } from '../../function/languege.js';

/* `const Header = ({lang = 'en'})` is a functional component in React that accepts props as an object.
In this case, it is using object destructuring to extract the `lang` prop with a default value of
`'en'`. This means that if the `lang` prop is not provided when using the `Header` component, it
will default to `'en'`. */
const Header = ({lang = 'en'}) => {
    return (
        <header>
            <div id="logo"><h1>Color</h1></div>

            {/* This code snippet is part of a React functional component called `Header`. Here's what
            it's doing: */}
            <nav>
                {/* The code snippet you provided is creating navigation links using the `Link`
                component from `react-router-dom` within a React functional component called
                `Header`. Here's what it's doing: */}
                <Link to='/' className='nav-link'>{translation[lang].header.home}</Link>
                <Link to='/contact-us' className='nav-link'>{translation[lang].header.contact}</Link>
                <Link to='/about-us' className='nav-link'>{translation[lang].header.about}</Link>
            </nav>
            <Outlet />
        </header>


    )
}

/* `export default Header;` is exporting the `Header` component as the default export from this
JavaScript module. This means that when another file imports from this module, if no specific named
export is specified, the `Header` component will be imported by default. This allows other parts of
the application to import and use the `Header` component easily. */
export default Header;