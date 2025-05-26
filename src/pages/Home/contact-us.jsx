import Header from "../../propertis/Header/header";
import Footer from "../../propertis/Footer/footer";
import Contact from "../../propertis/Contactus/contactus";
import { useState } from "react";
import { changeLang } from '../../function/languege.js';

const ContactUs = () => {
    /* The line `const [lang, setLang] = useState('en');` in the ContactUs component is using the
    `useState` hook from React to create a state variable `lang` and a function `setLang` to update
    the `lang` state. */
    const [lang, setLang] = useState('en');

    /* The `return` statement in the `ContactUs` component is returning JSX elements that make up the
    structure of the component. It includes the following components: */
    return (
        <>
            <Header lang={lang}/>
            <Contact lang={lang} />
            <Footer lang={lang} setLang={setLang}/>
        </>

    )
}

/* `export default ContactUs;` is exporting the `ContactUs` component as the default export of this
file. This allows other files to import and use the `ContactUs` component by importing it without
curly braces, like this: `import ContactUs from './ContactUs';`. */
export default ContactUs;