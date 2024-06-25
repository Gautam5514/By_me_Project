function loadHTML(url, elementId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
        document.getElementById(elementId).innerHTML = data;
        })
        .catch((error) => console.error("Error loading HTML:", error));
    }
    
    function init() {
    loadHTML("index.html", "index-placeholder");
    loadHTML("footer.html", "footer-placeholder");
    }
    
    window.addEventListener("DOMContentLoaded", init);
    