const navBar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navBar.style.backgroundColor = 'black';
    }
    else {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

const header = document.querySelector(".header");
const filmBarBtns = document.querySelectorAll(".Film-nav-bar li");

filmBarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        header.style.backgroundImage = `url(Assets/${btn.className}.jpg)`;
        filmBarBtns.forEach(btn1 => {
                btn1.classList.remove('active');
        });
        btn.classList.add('active');
    });
});