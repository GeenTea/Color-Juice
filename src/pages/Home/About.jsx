import Header from "../../propertis/Header/header.jsx";
import AboutUs from "../../propertis/AboutPage/about-us.jsx";
import Footer from "../../propertis/Footer/footer.jsx";
import { useState } from "react";
import { changeLang } from '../../function/languege.js';

const About = () => {
    /* The line `const [lang, setLang] = useState('en');` is using the `useState` hook from React to
    create a state variable `lang` and a function `setLang` to update the `lang` state. */
    const [lang, setLang] = useState('en');

    /* The code `<Header lang={lang}/>, <AboutUs lang={lang}/>, <Footer lang={lang}
    setLang={setLang}/>` is rendering three components in the `About` functional component.
    Each component is being passed a prop `lang` with the value of the `lang` state
    variable, which is being managed by the `useState` hook. Additionally, the `Footer`
    component is also being passed a prop `setLang` which is a function to update the `lang`
    state variable. This allows the components to access and utilize the language state
    within the `About` component.*/
    return(
        <>
            <Header lang={lang}/>
            <AboutUs lang={lang}/>
            <Footer lang={lang} setLang={setLang}/>
        </>
    );
}

/* `export default About;` is exporting the `About` component as the default export from this
JavaScript module. This means that when another module imports from this module, it will receive the
`About` component as the default export. This allows other parts of the application to import and
use the `About` component easily. */
export default About;