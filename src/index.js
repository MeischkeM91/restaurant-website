import './style.css';
import Bartender from './bartender.jpeg';


const hero = document.querySelector('.hero');
// Image of bartender
const bartender = new Image();
bartender.src = Bartender;
bartender.classList.add('bartender')

hero.appendChild(bartender);

//alert('Everything is working!');