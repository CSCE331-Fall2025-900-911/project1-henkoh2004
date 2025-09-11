function toggleStyleSheet(){
    var link = document.getElementById("pagestyle");
    var current = link.getAttribute("href");
    var newSheet = current.includes("style2.css") ? "style.css" : "style2.css";

    link.setAttribute("href", newSheet);
    localStorage.setItem("site_style", newSheet);
}

window.onload = function(){
    var saved = localStorage.getItem("site_style");
    var link = document.getElementById("pagestyle");

    if (saved && link) {
        link.setAttribute("href", saved);
    }
    var button = document.getElementById("toggleBtn");
    if (button) {
        button.addEventListener("click", toggleStyleSheet);
    }
};