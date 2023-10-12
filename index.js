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
        header.style.backgroundImage = `url(Assets/${btn.className}.png)`;
        filmBarBtns.forEach(btn1 => {
                btn1.classList.remove('active');
        });
        btn.classList.add('active');
    });
});

const seriesDivs = document.querySelectorAll("[class^='main-series-']");

seriesDivs.forEach(div => {
    div.addEventListener('click', () => {
        if (div.classList.contains("clickable")) {
            window.location.href = `Series/${div.classList[0]}.html`;
        }
    });
});

let currentBG = 1;

setInterval(() => {
    let offset = 0;
    let interval = setInterval(() => {
        offset += 0.1;
        header.style.backgroundPosition = `${-offset}vw 0, ${100 - offset}vw 0`;
        if (offset > 100) {
            clearInterval(interval);
            offset = 0;
        }
    }, 2)

    if (currentBG === 8) {
        currentBG = 1;
        header.style.backgroundImage = `url(Assets/serie-${8}.png), url(Assets/serie-${currentBG}.png)`;
    }
    else {
        header.style.backgroundImage = `url(Assets/serie-${currentBG}.png), url(Assets/serie-${currentBG + 1}.png)`;
        currentBG++;
    }

}, 30000);