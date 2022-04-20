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
    homeLink.classList.add('navlink','home-link');
    homeLink.innerText = 'Home';
    homeLink.addEventListener('click', () =>{
        loadHome();
    });
    const menuLink = document.createElement('div');
    menuLink.classList.add('navlink','menu-link');
    menuLink.innerText = 'Menu';
    const contactLink = document.createElement('div');
    contactLink.classList.add('navlink','contact-link','active');
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
    const nameDiv = document.createElement('div');
    const nameLabel = document.createElement('label');
    nameLabel.for='nameField';
    nameLabel.innerText='Name: ';
    const nameField = document.createElement('input');
    nameField.type='text';
    nameField.name='nameField';
    const phoneDiv = document.createElement('div');
    const phoneLabel = document.createElement('label');
    phoneLabel.for='phoneField';
    phoneLabel.innerText='Phone: ';
    const phoneField = document.createElement('input');
    phoneField.type='text';
    phoneField.name='phoneField';
    const emailDiv = document.createElement('div');
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
    textareaField.rows='7';
    // Submit button
    const subBtn = document.createElement('button');
    subBtn.type='button';
    subBtn.classList.add('subBtn');
    subBtn.innerText = 'Submit';

    //Create form
    pageContent.appendChild(contactForm);
    contactForm.appendChild(formFieldset);
    formFieldset.appendChild(formLegend);
    formFieldset.appendChild(contactDetails);
    formFieldset.appendChild(textareaHolder);
    contactDetails.appendChild(nameDiv);
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameField);
    contactDetails.appendChild(phoneDiv);
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneField);
    contactDetails.appendChild(emailDiv);
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailField);
    textareaHolder.appendChild(textareaField);
    formFieldset.appendChild(subBtn);
};

export default function loadContact() {
    createContact();
};

