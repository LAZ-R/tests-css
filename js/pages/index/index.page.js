import * as SERVICE_PWA from '../../services/pwa.service.js';

const pageTitle = 'ES6 pwa';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const topHalf = document.createElement('div');
    topHalf.setAttribute('id', 'topHalf');
    topHalf.setAttribute('class', 'fiftyPercent topHalf');
    topHalf.appendChild(document.createElement('span')).innerHTML =
        'coucou';
    
    document.getElementById('main').appendChild(topHalf);

    const bottomHalf = document.createElement('div');
    bottomHalf.setAttribute('id', 'bottomHalf');
    bottomHalf.setAttribute('class', 'fiftyPercent bottomHalf');
    bottomHalf.appendChild(document.createElement('span')).innerHTML =
        'coucou';
    
    document.getElementById('main').appendChild(bottomHalf);
}

renderView();