// Append templates
const elements = document.querySelectorAll("*[include]");
elements.forEach((element) => {
    file = element.getAttribute("include");
    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) { element.innerHTML = this.responseText; }
                else if (this.status === 404) { element.innerHTML = "Something broke."; }
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
    }   
})

setTimeout(() => {
    // Hamburger functionality
    const hamburger = document.querySelector(".hamburger");
    const secondaryNav = document.querySelector(".sec .navbar-items");
    hamburger.addEventListener("click", () => {
        if (secondaryNav.classList.contains("hidden")) {
            secondaryNav.classList.remove("hidden");
            hamburger.classList.remove("fa-bars");
            hamburger.classList.add("fa-times");
        } else {
            secondaryNav.classList.add("hidden");
            hamburger.classList.add("fa-bars");
            hamburger.classList.remove("fa-times");
        }
    });
}, 200);
