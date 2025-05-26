import { useState } from "react";
import Header from "../../propertis/Header/header.jsx";
import Mainn from "../../propertis/Main/mainn.jsx";
import Footer from "../../propertis/Footer/footer.jsx";
import { changeLang } from '../../function/languege.js';

const Home = () =>{
    /* The line `const [lang, setLang] = useState('en');` is using the `useState` hook from React to
    create a state variable `lang` with an initial value of `'en'`. It also creates a function
    `setLang` that can be used to update the value of `lang`. This allows the `Home` component to
    manage the language state and re-render when the language is changed. */
    const [lang, setLang] = useState('en');

    /* The `return` statement in the `Home` component is returning a JSX expression that represents the
    structure of the component. It is rendering a `div` element containing three child components:
    `Header`, `Mainn`, and `Footer`. */
    return(
        <div>
            <Header lang={lang}/>
            <Mainn lang={lang}/>
            <Footer lang={lang} setLang={setLang}/>
        </div>
    )
}

/* `export default Home;` is exporting the `Home` component as the default export of this module. This
allows other parts of the application to import and use the `Home` component. When another module
imports this module, they can import the `Home` component using `import Home from 'path/to/Home';`
where `path/to/Home` is the path to the file where `Home` is defined. */
export default Home;