var arrowBtn = document.getElementById("arrow-btn");
var rootElement = document.getElementById("skip-1")

function scrollDown() {
    window.scrollTo({
        top: 1200,
        behavior: "smooth"
    })
}

arrowBtn.addEventListener("click", scrollDown);