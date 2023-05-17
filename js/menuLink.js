import {
    getPopular,
    getTop
} from './services.js';
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week')
const getNav = document.querySelectorAll('.get-nav')


const menuLink = () => {
getNav.forEach(nav => {
    nav.addEventListener('click', event => {
        console.log('event', event.target)
        event.preventDefault();
     
        const target = event.target.closest('.get-nav__link')

        if (target){
            event.preventDefault();

            filmWeek.getElementsByClassName.display ='none';
            title.textContent = target.textContent

            if(target.classList.contains('get-nav__link_popular-movies')){
                getPopular('movie')
                .then(data=> console.log(data))

            }
        }
    })
})
}

export default menuLink;