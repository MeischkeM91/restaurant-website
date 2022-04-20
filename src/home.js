import './style.css';
import Bartender from './bartender.jpeg';

const createHome = () =>{
    const pageWrapper = document.querySelector('#wrapper');
    pageWrapper.innerHTML = '';
    /************ 
        TOPBAR
    ************/
    // Logo element
    const pageLogo = document.createElement('div');
    pageLogo.classList.add('logo');
    pageLogo.innerText = 'hIP.';
    // Navbar Element
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    // Navbar links
    const homeLink = document.createElement('div');
    homeLink.classList.add('navlink','home-link','active');
    homeLink.innerText = 'Home'
    const menuLink = document.createElement('div');
    menuLink.classList.add('navlink','menu-link');
    menuLink.innerText = 'Menu'
    const contactLink = document.createElement('div');
    contactLink.classList.add('navlink','contact-link');
    contactLink.innerText = 'Contact'
    // Add top bar to page
    pageWrapper.appendChild(pageLogo);
    pageWrapper.appendChild(navbar);
    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(contactLink);
    /************ 
    PAGE CONTENT 
    ************/
    // page content wrapper
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageWrapper.appendChild(pageContent);
    // **** HERO ****
    // Hero div
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroText = document.createElement('p');
    heroText.innerText = `The best bar you've never heard of.`
    // Image of bartender
    const bartender = new Image();
    bartender.src = Bartender;
    bartender.classList.add('bartender')
    // Create Hero
    pageContent.appendChild(hero);
    hero.appendChild(heroText);
    hero.appendChild(bartender);
    // **** ABOUT US ****
    // About Us div
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');
    // Header
    const aboutUsHeader = document.createElement('h1');
    aboutUsHeader.innerText = `Our Mission`
    // Text Content
    const aboutUsText = document.createElement('p')
    aboutUsText.innerText = `Here at hIP. we aim to be the best bar that you’ve never heard of. From the drinks, to the atmosphere, we provide the trendiest experience in all Manhattan. So come on down and grab yourself an app and a drink that’s sure to put your misunderstood soul at ease.`
    // Create About Us
    pageContent.appendChild(aboutUs);
    aboutUs.appendChild(aboutUsHeader);
    aboutUs.appendChild(aboutUsText);
    //**** LOCATION *****
    const location = document.createElement('div');
    location.classList.add('location');
    // Address
    const address = document.createElement('p');
    address.innerHTML = 
    `Visit Us @<br>W 52nd St & 6th Ave,<br> New York, NY 10019`;
    // Google Map
    const map = document.createElement('div');
    map.classList.add('map');
    const mapIframe = document.createElement('iframe');
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.894086610008!2d-73.98185314895976!3d40.76128054243458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25965167d9c77%3A0x93a5b0d26a4071fa!2sGalbi%20Q!5e1!3m2!1sen!2sus!4v1650379074781!5m2!1sen!2sus";
    // Create Location
    pageContent.appendChild(location);
    location.appendChild(address);
    location.appendChild(map);
    map.appendChild(mapIframe);
};

export default function loadHome() {
    createHome();
};

