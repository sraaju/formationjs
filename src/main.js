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
  constructMainRouteContent(location.pathname)
});

function initNavbar() {
  var links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log(evt);
      constructMainRouteContent(evt.target.attributes["href"].value)

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
  wrapper.innerHTML = "<h1>Editor</h1>";
}

function loadDOMThumbnail() {
  wrapper.innerHTML = "<h1>Thumbnail</h1>";
}

function loadDOMHome() {
  wrapper.innerHTML = "<h1>Home</h1>";
}
