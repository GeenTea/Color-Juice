import './style.css';
import { translation, changeLang } from '../../function/languege.js';

/* The line `const AboutUs = ({lang = 'en'})` is defining a functional React component named `AboutUs`
that accepts props. In this case, the component is expecting a prop named `lang`, and if the `lang`
prop is not provided when the component is used, it will default to `'en'`. */
const AboutUs = ({lang = 'en'}) => {

    /* The `return` statement in the `AboutUs` component is returning JSX (JavaScript XML) elements
    that represent the structure of the component's UI. Here's a breakdown of what the JSX code is
    doing: */
    return(
        <div className="containerabout">
            <h1>{translation[lang].about.title}</h1>
            <hr />
            <div id="paragraph">
                <p>{translation[lang].about.paragraph_1}</p>
            </div>
        </div>
    )
}

/* The line `export default AboutUs;` is exporting the `AboutUs` component as the default export from
this module. This means that when another file imports from this module, if no specific named export
is specified, the `AboutUs` component will be imported by default. */
export default AboutUs;