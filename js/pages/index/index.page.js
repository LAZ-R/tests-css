import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as HEADER from '../../components/header/header.component.js'
import * as FOOTER from '../../components/footer/footer.component.js'

const pageTitle = 'Test CSS';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const page = document.createElement('div');
    page.setAttribute('id', 'indexSection1');
    page.setAttribute('class', 'page-section section1');

    for (let n = 1; n <= 25; n++) {
        page.appendChild(document.createElement('p')).innerHTML =
            `placeholder n°${n}`;
    }       
    
    document.getElementById('main').appendChild(page);

    const page2 = document.createElement('div');
    page2.setAttribute('id', 'indexSection2');
    page2.setAttribute('class', 'page-section section2');

    for (let n = 1; n <= 25; n++) {
        page2.appendChild(document.createElement('p')).innerHTML =
            `placeholder n°${n}`;
    }      
    
    document.getElementById('main').appendChild(page2);
    
}
HEADER.renderView();
renderView();
FOOTER.renderView();
SERVICE_PWA.setViewportSize();