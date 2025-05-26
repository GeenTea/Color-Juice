import Header from "../../propertis/Header/header";
import Footer from "../../propertis/Footer/footer";
import Contact from "../../propertis/Contactus/contactus";
import { useState } from "react";
import { changeLang } from '../../function/languege.js';

const ContactUs = () => {
    const [lang, setLang] = useState('en');

    return (
        <>
            <Header lang={lang}/>
            <Contact lang={lang} />
            <Footer lang={lang} setLang={setLang}/>
        </>

    )
}

export default ContactUs;