import './style.css';
import loadHome from './home';
import loadContact from './contact';

const menuItem = (name, desc) => {
    return {name,desc};
};

// Menu Items
// Apps
let buffWings = menuItem('Buffalo Wings', 'Tender Wings Coated in Thick Breading. Served with Celery, Blue Cheese, and Ranch.');
let boomShrimp = menuItem('Boom Boom Shrimp','Twelve Breaded and Fried Shrimp, Tossed in Boom Boom sauce.');
let friedMozz = menuItem('Fried Mozzerella','Six Planks of Mozzarella Coated with Italian-Style Bread Crumbs, Lightly Fried and Served with Marinara Sauce.');
let beerPretzel = menuItem('Beer Cheese Pretzel','Beer Cheese Soup w/Bacon, Andouille Sausage, Jalapeno, Smoked Gouda, Cheddar, Giant Everything Pretzel');
let sweetTots = menuItem('Short Rib Sweet Potato Tots','Thai Chili Braised Short Rib, Sweet Potato Tots, Green Onion, Red Peppers, Garlic Aioli');
let appsArray = [buffWings, boomShrimp, friedMozz, beerPretzel, sweetTots];
// Drinks
let blackWhiskeySmash = menuItem('Blackberry Whiskey Smash','Barrel Knob Creek Cask Strength Rye, Blackberry, Sage, Ginger & Lemon');
let blueStorm = menuItem('Blueberry Storm','3 Olives Blueberry Vodka, Fresh Lime, Simple Syrup, House Ginger Beer, Shaved Nutmeg');
let cucumberGim = menuItem('Cucumber Gimlet','New Amsterdam Stratus Gin, Lime, Mr.Q Cucumber Soda & Simple Syrup');
let mule = menuItem('Mighty Mule','Wheatly Vodka, Ginger Beer & Lime');
let oldFashion = menuItem('Smoked Old Fashioned','Four Roses Bourbon, Smoke Essence, Demerara, Walnut Bitters');
let cocktailArray = [blackWhiskeySmash,blueStorm,cucumberGim,mule,oldFashion];
let bud = menuItem('Budweiser','Missouri Style: Pale American Lager | Abv 5%');
let corona = menuItem('Corona','Mexico Style: American Lager | Abv 4.6%');
let heineken = menuItem('Heineken','Netherlands Style: Pale Lager | Abv 5%');
let redbridge = menuItem('Redbridge – GF','Missouri Style: Gluten Free Red Lager | Abv 4%');
let angry = menuItem('Angry Orchard','New York Style: Crisp Apple Cider | Abv 5%');
let beerArray = [bud, corona, heineken, redbridge, angry];

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
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.innerText = 'MENU';
    // Appetizers
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    const appHeader = document.createElement('div');
    appHeader.classList.add('app-header');
    appHeader.innerText = 'APPS';
    const appList = document.createElement('div');
    appList.classList.add('app-list');
    appsArray.forEach(element => {
        appList.innerHTML += `<p class='item-name'>${element.name}</p><p class='item-desc'>${element.desc}</p>`;
    });
    // Drinks
    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('drinks-container');
    const drinksHeader = document.createElement('div');
    drinksHeader.classList.add('drinks-header');
    drinksHeader.innerText = 'DRINKS';
    const drinksList = document.createElement('div');
    drinksList.classList.add('drinks-list');
    // Cocktails container
    const cocktailDiv = document.createElement('div');
    cocktailDiv.classList.add('cocktail-div');
    const cocktailHeader = document.createElement('div');
    cocktailHeader.classList.add('cocktail-header');
    cocktailHeader.innerText = 'COCKTAILS';
    const cocktailList = document.createElement('div');
    cocktailList.classList.add('cocktail-list');
    cocktailArray.forEach(element => {
        cocktailList.innerHTML += `<p class='item-name'>${element.name}</p><p class='item-desc'>${element.desc}</p>`;
    });
    // Beers Container
    const beerDiv = document.createElement('div');
    beerDiv.classList.add('beer-div');
    const beerHeader = document.createElement('div');
    beerHeader.classList.add('beer-header');
    beerHeader.innerText = 'BEERS';
    const beerList = document.createElement('div');
    beerList.classList.add('beer-list');
    beerArray.forEach(element => {
        beerList.innerHTML += `<p class='item-name'>${element.name}</p><p class='item-desc'>${element.desc}</p>`;
    });

    // Create Menu Page
    pageContent.appendChild(menuHeader);
    pageContent.appendChild(appContainer);
    appContainer.appendChild(appHeader);
    appContainer.appendChild(appList);
    pageContent.appendChild(drinksContainer);
    drinksContainer.appendChild(drinksHeader);
    drinksContainer.appendChild(drinksList);
    drinksList.appendChild(cocktailDiv);
    cocktailDiv.appendChild(cocktailHeader);
    cocktailDiv.appendChild(cocktailList);
    drinksList.appendChild(beerDiv);
    beerDiv.appendChild(beerHeader);
    beerDiv.appendChild(beerList);


};

export default function loadMenu() {
    createMenu();
};

