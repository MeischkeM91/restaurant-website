import './style.css';

const createContact = () =>{
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
    homeLink.innerText = 'Home'
    const menuLink = document.createElement('div');
    menuLink.classList.add('navlink','menu-link');
    menuLink.innerText = 'Menu'
    const contactLink = document.createElement('div');
    contactLink.classList.add('navlink','contact-link','active');
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
};

export default function loadContact() {
    createContact();
};

