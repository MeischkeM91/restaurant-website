import './style.css';
import loadHome from './home';

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
    homeLink.classList.add('navlink','home-link','active');
    homeLink.innerText = 'Home';
    homeLink.addEventListener('click', () =>{
        loadHome();
        console.log('clicked')
    });
    const menuLink = document.createElement('div');
    menuLink.classList.add('navlink','menu-link');
    menuLink.innerText = 'Menu';
    const contactLink = document.createElement('div');
    contactLink.classList.add('navlink','contact-link');
    contactLink.innerText = 'Contact';
    contactLink.addEventListener('click', () =>{
        loadContact();
        console.log('clicked')
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
    pageContent.classList.add('contact-page-content');
    pageWrapper.appendChild(pageContent);

    // Contact Form
    const contactForm = document.createElement('form');
    contactForm.action='post';
    const formFieldset = document.createElement('fieldset');
    // Form Legend
    const formLegend = document.createElement('legend');
    formLegend.innerText='Contact Us';
    // User details portion
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contactDetails');
    const nameLabel = document.createElement('label');
    nameLabel.for='nameField';
    nameLabel.innerText='Name: ';
    const nameField = document.createElement('input');
    nameField.type='text';
    nameField.name='nameField';
    const phoneLabel = document.createElement('label');
    phoneLabel.for='phoneField';
    phoneLabel.innerText='Phone: ';
    const phoneField = document.createElement('input');
    phoneField.type='text';
    phoneField.name='phoneField';
    const emailLabel = document.createElement('label');
    emailLabel.for='emailField';
    emailLabel.innerText='Email: ';
    const emailField = document.createElement('input');
    emailField.type='text';
    emailField.name='emailField';
    // Textarea
    const textareaHolder = document.createElement('div');
    const textareaField = document.createElement('textarea');
    textareaField.style.width='100%';
    textareaField.rows='10';

    //Create form
    pageContent.appendChild(contactForm);
    contactForm.appendChild(formFieldset);
    formFieldset.appendChild(formLegend);
    formFieldset.appendChild(contactDetails);
    formFieldset.appendChild(textareaHolder);
    contactDetails.appendChild(nameLabel);
    contactDetails.appendChild(nameField);
    contactDetails.appendChild(phoneLabel);
    contactDetails.appendChild(phoneField);
    contactDetails.appendChild(emailLabel);
    contactDetails.appendChild(emailField);
    textareaHolder.appendChild(textareaField);
};

export default function loadContact() {
    createContact();
};

