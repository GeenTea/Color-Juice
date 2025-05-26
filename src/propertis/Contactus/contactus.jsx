import { translation, changeLang } from '../../function/languege.js';
import './style.css';

const Contact = ({lang = 'en'}) => {
    const contactText = translation[lang].contact;

    return (
        <div className="contact1">
            <h1>{translation[lang].contact.title}</h1>
            <center>
                <hr id='hrunderh1'/>
            </center>
            
            <p  id='paragraph'>{translation[lang].contact.paragraph_1}</p>
            <center>
                <form action="">
                    <input type="text" id="name" name="name" className='inputLabel' placeholder={translation[lang].contact.name} required /><br />
                    
                    <input type="email" id="email" name="email" className='inputLabel' placeholder={translation[lang].contact.email} required /><br />
                    
                    <textarea id="message" name="message" className='messagebox' placeholder={translation[lang].contact.message} required></textarea><br />
                    
                    <button type="submit" className='submitButton'>{translation[lang].contact.submit}</button>
                    </form>
            </center>
        </div>
    );
}

export default Contact;