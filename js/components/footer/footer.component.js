import * as SERVICE_PWA from '../../services/pwa.service.js';

export const renderView = () => {
    document.getElementById('footer').innerHTML =
    `&copy; ${new Date().getFullYear()} - v${SERVICE_PWA.getAppVersionNumber()} - <a href="./about.html">About</a>`;
}