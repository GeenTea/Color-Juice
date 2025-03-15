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
        }
    }
};

const changeLang = (lang) => {
    console.log(lang);

    return lang === 'en' ? 'ru' : 'en';
}
export {translation, changeLang};