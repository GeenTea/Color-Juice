import lang from './languegeChangeButton.js';

const translation = {
    en: {
        header: {
            home: "Home",
            contact: "Contact us",
            about: "About us",
        },
        home:{
            title: "COLOR JUICE",
            text_home_1: "Color isn’t just a drink—it’s an explosion of flavor and energy! Refreshing fruity tones, vibrant emotions, and an invigorating boost to power your day. Choose your color, feel the freedom, and enjoy every sip!",
            text_home_2: "Try Color – a taste that stands out! 🔥🍹"
        },
        about:{
            title: "ABOUT US",
            paragraph_1: "We are the Color Juice team, and we are excited to introduce you to our unique drink! Color Juice is not just a juice; it’s a true explosion of flavors and emotions. We use only the freshest and highest quality ingredients to create the perfect blend of fruits and berries. Every sip is an explosion of freshness and energy that will charge you for the whole day!",
        }
    },

    ru: {
        header: {
            home: "Главная",
            contact: "Контакты",
            about: "О нас",
        },
        home:{
            title: "COLOR СОК",
            text_home_1: "Color – это не просто напиток, это взрыв вкуса и энергии! Освежающие оттенки фруктов, яркие эмоции и бодрящий заряд на весь день. Выбери свой цвет, ощути свободу и наслаждайся каждым глотком!",
            text_home_2: "Попробуй Color – вкус, который выделяется! 🔥🍹"
        },
        about:{
            title: "О НАС",
            paragraph_1: "Мы - команда Color Juice, и мы рады представить вам наш уникальный напиток! Color Juice - это не просто сок, это настоящая феерия вкусов и эмоций. Мы используем только самые свежие и качественные ингредиенты, чтобы создать идеальное сочетание фруктов и ягод. Каждый глоток - это взрыв свежести и энергии, который зарядит вас на весь день!",
        }
    }
};

const changeLang = (lang) => {
    console.log(lang);

    return lang === 'en' ? 'ru' : 'en';
}
export {translation, changeLang};