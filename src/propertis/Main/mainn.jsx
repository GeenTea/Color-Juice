import './mainStyle.css';
import { translation, changeLang } from '../../function/languege.js';

const Mainn = ({lang}) => {

    return (
        <main>
            <div id="Tex-fild">
                <div id="title">
                    <h1>{translation[lang].home.title}</h1>
                </div>
                <div id="text-ads">
                    <p>{translation[lang].home.text_home_1}</p>
                    <br />
                    <p>{translation[lang].home.text_home_2}</p> 
                </div>
            </div>
            
            <div id="juice-content">
                <div id='juice'></div>
                <div id="juice-img">
                    <img src="\src\assets\Fanta-No-Background-Clip-Art(1).png" alt="" />
                </div>
            </div>
        </main>
    )
}

export default Mainn