import * as SERVICE_PWA from '../../services/pwa.service.js'

export const render = () => {
    const year = new Date().getFullYear();
    const ghostFooter = document.createElement('div');
    ghostFooter.setAttribute('class', 'ghost-footer');

    document.getElementById('body').appendChild(ghostFooter);


    
    const footer = document.createElement('footer');
    footer.innerHTML =
        '<div>' +
            '&copy; ' + year + ' - v' + SERVICE_PWA.getAppVersionNumber() + ' - <a href="https://laz-r.github.io/">laz_R</a> - <a href="./about.html">About</a>' +
        '</div>';

    document.getElementById('body').appendChild(footer);
}