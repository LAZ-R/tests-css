import * as SERVICE_PWA from '../../services/pwa.service.js';

let isMenuVisible = false;

export const renderView = () => {
    const header = document.getElementById('header');

    const headerIndexLink = document.createElement('a');
    headerIndexLink.setAttribute('href', './');
    headerIndexLink.setAttribute('class', 'header-index-link');

    const headerLogo = document.createElement('img');
    headerLogo.setAttribute('src', './images/logo-blanc.svg');
    headerLogo.setAttribute('alt', 'lazr logo');
    headerLogo.setAttribute('class', 'header-logo');
    headerLogo.addEventListener('click', () => {
        window.location = './';
    });

    headerIndexLink.appendChild(headerLogo);
    header.appendChild(headerIndexLink);

    if (SERVICE_PWA.isLaptopOrUp) {
        const headerLinksGroup = document.createElement('div');
        headerLinksGroup.setAttribute('id', 'headerLinksGroup');
        headerLinksGroup.setAttribute('class', 'header-links-group');
        headerLinksGroup.innerHTML = SERVICE_PWA.getAppMenuLinks();

        header.appendChild(headerLinksGroup);
    } else {
        const headerBurgerMenuButton = document.createElement('button');
        headerBurgerMenuButton.setAttribute('id', 'headerBurgerMenuButton');
        headerBurgerMenuButton.setAttribute('class', 'header-burger-menu-button');
        headerBurgerMenuButton.innerHTML =
            '☰'
        headerBurgerMenuButton.addEventListener('click', () => {
            if (isMenuVisible) {
                document.getElementById('headerBurgerMenuButton').innerHTML = '☰';
                document.getElementById('headerBurgerMenu').style.right = '-50%';
                isMenuVisible = false;
            } else {
                document.getElementById('headerBurgerMenuButton').innerHTML = '☒';
                document.getElementById('headerBurgerMenu').style.right = 0;
                isMenuVisible = true;
            }
        });

        header.appendChild(headerBurgerMenuButton);
        const headerBurgerMenu = document.createElement('div');
        headerBurgerMenu.setAttribute('id', 'headerBurgerMenu');
        headerBurgerMenu.setAttribute('class', 'header-burger-menu');
        headerBurgerMenu.innerHTML = SERVICE_PWA.getAppMenuLinks();

        document.getElementById('body').appendChild(headerBurgerMenu);
    }
}