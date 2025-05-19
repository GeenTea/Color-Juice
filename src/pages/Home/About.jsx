import Header from "../../propertis/Header/header.jsx";
import AboutUs from "../../propertis/AboutPage/about-us.jsx";
import Footer from "../../propertis/Footer/footer.jsx";
import { useState } from "react";
import { changeLang } from '../../function/languege.js';

const About = () => {
    const [lang, setLang] = useState('en');

    return(
        <>
            <Header lang={lang}/>
            <AboutUs lang={lang}/>
            <Footer lang={lang} setLang={setLang}/>
        </>
    );
}

export default About;