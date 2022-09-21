import { VERSION_NUMBER } from "../data/pwa.data.js";

export const setViewportSize = () => {
  const setDocumentHeight = () => {
    document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', setDocumentHeight);
  setDocumentHeight();
}

export const setHTMLTitle = (pageTitle) => {
  const title = document.getElementById('title');
  title.innerHTML = pageTitle;

  const appleTitle = document.getElementById('appleTitle');
  appleTitle.setAttribute('content', pageTitle);
}

export const getAppVersionNumber = () => {
  return VERSION_NUMBER;
}