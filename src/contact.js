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
    /***** Details Form ******/
    const genDetails = document.createElement('div');
    genDetails.classList.add('gen-details');
    const addressDetails = document.createElement('p');
    addressDetails.classList.add('address-details');
    addressDetails.innerHTML = `Visit Us @<br>W 52nd St & 6th Ave,<br> New York, NY 10019`;
    const hoursDetails = document.createElement('p');
    hoursDetails.classList.add('hours-details');
    hoursDetails.innerHTML = '<span class="hours">Hours</span><br><br>SUN: 12p - 2a<br>MON: 4p - 2a<br>TUE: 4p - 2a<br>WED: 4p - 2a<br>THUR: 4p - 2a<br>FRI: 4p - 4a<br>SAT: 12p - 4a<br>';
    const mapDetails = document.createElement('iframe');
    mapDetails.classList.add('map-details');
    mapDetails.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.894086610008!2d-73.98185314895976!3d40.76128054243458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25965167d9c77%3A0x93a5b0d26a4071fa!2sGalbi%20Q!5e1!3m2!1sen!2sus!4v1650379074781!5m2!1sen!2sus";
    // Create Details Container
    pageContent.appendChild(genDetails);
    genDetails.appendChild(addressDetails);
    genDetails.appendChild(hoursDetails);
    genDetails.appendChild(mapDetails); 

    /***** Contact Form *****/
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
    subBtn.addEventListener('click', () =>{
        nameField.value='';
        phoneField.value='';
        emailField.value='';
        textareaField.value='';
        alert('Thank you for submitting your feedback!');
    });
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

