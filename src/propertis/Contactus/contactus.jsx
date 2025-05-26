import { translation, changeLang } from '../../function/languege.js';
import './style.css';

/* `const Contact = ({lang = 'en'})` is a functional component in JavaScript React that accepts props
as an object. It uses object destructuring to extract the `lang` prop with a default value of
`'en'`. This means that if the `lang` prop is not provided when using the `Contact` component, it
will default to `'en'`. */
const Contact = ({lang = 'en'}) => {
    /* `const contactText = translation[lang].contact;` is extracting the specific `contact` object
    from the `translation` object based on the `lang` provided. */
    const contactText = translation[lang].contact;

    return (
        <div className="contact1">
            {/* `<h1>{translation[lang].contact.title}</h1>` is rendering the title of the contact
            section in the specified language. */ }
            <h1>{translation[lang].contact.title}</h1>
            <center>
                <hr id='hrunderh1'/>
            </center>
            
            <p  id='paragraph'>{translation[lang].contact.paragraph_1}</p>

            {/* /* The code snippet you provided is rendering a form inside a centered container. Here's a
            breakdown of what each element is doing: */}
            
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

/* `export default Contact;` is exporting the `Contact` component as the default export from this
JavaScript module. This means that when another file imports from this module, if it uses a default
import, it will receive the `Contact` component. */

export default Contact;