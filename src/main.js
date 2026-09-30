console.log("hello world");
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
  loadWrapperContent("/src/pages/editor/editor.html");
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
 * @returns {undefined} return rien
 */
const loadWrapperContent = (pageUrl) => {
  const promise = fetch(pageUrl).then((response) => {
    return response.text();
  });
  promise.then((html) => {
    wrapper.innerHTML = html;
  });
};
