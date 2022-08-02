import * as SERVICE_PWA from '../../services/pwa.service.js';
import * as COMPONENT_HEADER from "../../components/header/header.component.js";
import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'

const pageTitle = 'About';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    /* const page = document.createElement('div');
    page.setAttribute('id', 'page');
    page.setAttribute('class', 'page');
    page.appendChild(document.createElement('h1')).innerHTML =
        pageTitle;
    page.appendChild(document.createElement('p')).innerHTML =
        'Made by laz-R with ♥'; */

        const page1 = document.createElement('div');
        page1.setAttribute('class', 'demi-main');
        page1.style.backgroundColor = 'green';
        page1.innerHTML = "coucou";
    
    document.getElementById('main').appendChild(page1);


    const page2 = document.createElement('div');
        page2.setAttribute('class', 'demi-main');
        page2.style.backgroundColor = 'red';
        page2.innerHTML = "coucou";
    
    document.getElementById('main').appendChild(page2);
}

COMPONENT_HEADER.render();
renderView();
COMPONENT_FOOTER.render();
