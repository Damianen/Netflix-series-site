const navBar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navBar.style.backgroundColor = 'black';
    }
    else {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});