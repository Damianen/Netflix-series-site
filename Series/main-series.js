const navBar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navBar.style.backgroundColor = 'black';
    }
    else {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

const actor = document.querySelectorAll(".actor");

actor.forEach(div => {
    div.addEventListener('click', () => {
        if (div.classList.contains("BO")) {
            window.location.href = "BobOdenkirk.html";
        }
        if (div.classList.contains("JB")) {
            window.location.href = "JonathanBanks.html";
        }
    });
});