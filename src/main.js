import {promiseImage} from './datas.js'
import { loadImagesSelectOptions } from './pages/editor/editor.js';
console.log("hello world");

//const images = [];

var wrapper;

function LoadDate() {
  setInterval(function () {
    var date1 = new Date().toLocaleString();
    var foot1 = document.getElementById("footer");
    foot1.innerHTML = date1;
  }, 1000);
}
document.addEventListener("DOMContentLoaded", function () {
  LoadDate();
  wrapper = document.querySelector("#wrapper");
  initNavbar();
  constructMainRouteContent(location.pathname);
  // promiseImage.then()
});

function initNavbar() {
  var links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log(evt);
      constructMainRouteContent(evt.target.attributes["href"].value);

      history.pushState(null, "", evt.target.attributes["href"].value);
    });
  });
}

function constructMainRouteContent(path) {
  switch (path) {
    case "/editor":
      loadDOMEditor();
      break;
    case "/thumbnail":
      loadDOMThumbnail();
      break;

    default:
      loadDOMHome();
      break;
  }
}

function loadDOMEditor() {
  const promiseLoadingPage = loadWrapperContent("/src/pages/editor/editor.html");
  promiseLoadingPage.then((r)=>{
    console.log('fin de chargement');
  });
  Promise.all([promiseImage,promiseLoadingPage]).then(arrayDesReponses=>{
    console.log('tous charement effectue', arrayDesReponses)
    loadImagesSelectOptions(arrayDesReponses[0])
  })
}

function loadDOMThumbnail() {
  //  wrapper.innerHTML = "<h1>Thumbnail</h1>";
  loadWrapperContent("/src/pages/thumbnail/thumbnail.html");
}

function loadDOMHome() {
  loadWrapperContent("/src/pages/home/home.html");
}

/**
 * Fontion de chargement du wrapper provenant d'un adresse en param
 * @param {string} pageUrl url de la page html a chargé
 * @returns {Promise} return 
 */
const loadWrapperContent = (pageUrl) => {
  const promise = fetch(pageUrl).then((response) => {
    return response.text();
  });
  return promise.then((html) => {
    wrapper.innerHTML = html;
    return wrapper;
  });
};




