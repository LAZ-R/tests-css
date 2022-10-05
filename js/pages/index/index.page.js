import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as HEADER from '../../components/header/header.component.js'
import * as FOOTER from '../../components/footer/footer.component.js'

const pageTitle = 'Test CSS';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);

    /* --------------------------------------------------------------------- */
    
    const page = document.createElement('div');
    page.setAttribute('id', 'indexSection1');
    page.setAttribute('class', 'page-section section1');

    for (let n = 0; n < 24; n++) {
        page.appendChild(document.createElement('p')).innerHTML =
            `placeholder n°${n + 1}`;
    }       
    
    document.getElementById('main').appendChild(page);
    
}
HEADER.renderView();
renderView();
if (SERVICE_PWA.isLaptopOrUp) {
    FOOTER.renderView();
}
SERVICE_PWA.setViewportSize();