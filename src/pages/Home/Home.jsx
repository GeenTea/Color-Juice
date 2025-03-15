import { useState } from "react";
import Header from "../../propertis/Header/header.jsx";
import Mainn from "../../propertis/Main/mainn.jsx";
import Footer from "../../propertis/Footer/footer.jsx";
import { changeLang } from '../../function/languege.js';

const Home = () =>{
    const [lang, setLang] = useState('en');

    return(
        <div>
            <Header lang={lang}/>
            <Mainn lang={lang}/>
            <Footer lang={lang} setLang={setLang}/>
        </div>
    )
}

export default Home;