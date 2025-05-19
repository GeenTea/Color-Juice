import './style.css';
import { translation, changeLang } from '../../function/languege.js';

const AboutUs = ({lang = 'en'}) => {
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

export default AboutUs;