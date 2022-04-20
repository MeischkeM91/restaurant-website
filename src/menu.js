import './style.css';
import loadHome from './home';
import loadContact from './contact';

const createMenu = () =>{
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
    homeLink.classList.add('navlink','home-link');
    homeLink.innerText = 'Home';
    homeLink.addEventListener('click', () =>{
        loadHome();
    });
    const menuLink = document.createElement('div');
    menuLink.classList.add('navlink','menu-link','active');
    menuLink.innerText = 'Menu';
    menuLink.addEventListener('click', () =>{
        loadMenu();
    });
    const contactLink = document.createElement('div');
    contactLink.classList.add('navlink','contact-link');
    contactLink.innerText = 'Contact';
    contactLink.addEventListener('click', () =>{
        loadContact();
    });
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
    pageContent.classList.add('menu-page-content');
    pageWrapper.appendChild(pageContent);

    //Create Menu
    pageContent.appendChild(contactForm);

};

export default function loadMenu() {
    createMenu();
};

