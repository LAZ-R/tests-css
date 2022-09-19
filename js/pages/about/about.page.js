import * as SERVICE_PWA from '../../services/pwa.service.js';

const pageTitle = 'Test CSS';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const topHalf = document.createElement('div');
    topHalf.setAttribute('id', 'topHalf');
    topHalf.setAttribute('class', 'fiftyPercent topHalf');
    topHalf.appendChild(document.createElement('span')).innerHTML =
        'About content top half';
    
    document.getElementById('main').appendChild(topHalf);

    const bottomHalf = document.createElement('div');
    bottomHalf.setAttribute('id', 'bottomHalf');
    bottomHalf.setAttribute('class', 'fiftyPercent bottomHalf');
    bottomHalf.appendChild(document.createElement('span')).innerHTML =
        'About content bottom half';
    
    document.getElementById('main').appendChild(bottomHalf);

    const link = document.createElement('a');
    link.setAttribute('href', './');
    link.innerHTML = 'home';
    document.getElementById('footer').appendChild(link);
}

renderView();