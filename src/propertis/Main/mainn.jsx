import './mainStyle.css';
import { translation, changeLang } from '../../function/languege.js';

/* `const Mainn = ({lang})` is a functional component in JavaScript React that is accepting a prop
called `lang`. This prop is being used to determine the language of the content displayed in the
component. The component is using the `translation` object from the `languege.js` file to display
text in the specified language. */
const Mainn = ({lang}) => {

    return (
        <main>
            <div id="Tex-fild">
                {/* The code `<div id="title"> <h1>{translation[lang].home.title}</h1> </div>` is
                rendering a `<div>` element with an id of "title" that contains an `<h1>` element.
                The text content of the `<h1>` element is being dynamically populated based on the
                language selected through the `lang` prop. The `translation` object from the
                `languege.js` file is used to fetch the appropriate translation for the title based
                on the selected language. */}
                <div id="title">
                    <h1>{translation[lang].home.title}</h1>
                </div>
                <div id="text-ads">
                    <p>{translation[lang].home.text_home_1}</p>
                    <br />
                    <p>{translation[lang].home.text_home_2}</p> 
                </div>
            </div>
            
            {/* The code snippet you provided is defining a section within the `Mainn` component in a
            JavaScript React application. This section is responsible for displaying content related
            to a juice product, likely an image of a Fanta drink. */}
            <div id="juice-content">
                <div id='juice'></div>
                <div id="juice-img">
                    <img src="\src\assets\Fanta-No-Background-Clip-Art(1).png" alt="" />
                </div>
            </div>
        </main>
    )
}

/* `export default Mainn` is a statement in JavaScript that exports the `Mainn` component as the
default export of the file. This means that when another file imports from this file, if no specific
named export is specified, the `Mainn` component will be imported by default. This allows other
files to import and use the `Mainn` component in their code. */
export default Mainn