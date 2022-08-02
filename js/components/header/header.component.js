export const render = () => {
    const header = document.createElement('header');
    header.innerHTML =
        '<span class="header-logo" alt="app logo">ES6 pwa</span>' +
        '<nav class="header-nav">' +
            '<ul class="header-nav-ul">' +
            '<li class="header-nav-item">' +
                    '<button id="homeButton">Home</button>' +
                '</li>' +
                '<li class="header-nav-item">' +
                    '<button id="aboutButton">About</button>' +
                '</li>' +
            '</ul>' +
        '</nav>';

    document.getElementById('body').insertBefore(header, document.getElementById('main'));
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => {
        window.location = './index.html';
    });
    
    document.getElementById('body').insertBefore(header, document.getElementById('main'));
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.addEventListener('click', () => {
        window.location = './about.html';
    });


    const ghostHeader = document.createElement('div');
    ghostHeader.setAttribute('class', 'ghost-header');
    document.getElementById('body').insertBefore(ghostHeader, document.getElementById('main'));
}