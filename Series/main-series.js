const navBar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navBar.style.backgroundColor = 'black';
    }
    else {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

const actorDivs = document.querySelectorAll(".actor");

actorDivs.forEach(div => {
    div.addEventListener('click', () => {
        if (div.classList.contains("BO")) {
            window.location.href = "BobOdenkirk.html";
        }
        if (div.classList.contains("JO")) {
            window.location.href = "JonathanBanks.html";
        }
    });
});