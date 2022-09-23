import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMP_BURGER from '../burgerMenu/burgerMenu.component.js';

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
        COMP_BURGER.renderView();
    }
}