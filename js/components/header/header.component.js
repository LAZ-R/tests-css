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
}