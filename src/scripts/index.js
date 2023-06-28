import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import restaurant from '../DATA.json';

console.log('Hello Coders! :)');

console.log(restaurant);

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});
  
main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

function getData(data) {
    let renderData = '';

    data.restaurants.forEach((data, i) => {
        renderData += `
            <div tabindex="0" class="resto-item">
                <img tabindex="0" class="resto-image" src="${data.pictureId}" alt="${data.name}">
                <span tabindex="-1" class="resto-item-rating">${data.rating}</span>
                <div class="resto-info">
                    <h2 tabindex="0" class="resto-name">${data.name}</h2>
                    <h3 tabindex="0" class="resto-area">${data.city}</h3>
                    <h3 tabindex="0" class="resto-description">${data.description}</h3>
                </div>
            </div>
        `
    })
    
    document.getElementById('resto-list').innerHTML = renderData;
}

getData(restaurant)