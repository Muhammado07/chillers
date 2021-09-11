const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar .logo img")
const lang = document.querySelector('.navbar .lang a')
const req = document.querySelector('.navbar .req')
const fixy = document.querySelector('.fixed-req')
const togg = document.querySelectorAll('.navbar .toggle span')


window.onscroll = function () {
    // pageYOffset or scrollY

    if (window.pageYOffset > 80) {
        navbar.classList.add("scrolled");
        logo.setAttribute("src", "img/logo.png")
        lang.style.color = "#151515"
        req.style.color = "#fff"
        req.style.background = "#00539e"
        fixy.style.display = "block"

        togg.forEach(function (toggy) {
            toggy.style.background = "#151515"
        })



    } else {
        navbar.classList.remove("scrolled");
        logo.setAttribute("src", "img/logo-white.png")
        lang.style.color = "#fff"
        req.style.color = "#151515"
        req.style.background = "#fff"
        fixy.style.display = "none"
        togg.forEach(function (toggy) {
            toggy.style.background = "#fff"
        })
    }
};

const toggy = document.querySelector('.toggle');
const more = document.querySelector('.info-more')

toggy.addEventListener('click', function () {
    more.classList.toggle('show')
})

const playVideo = document.querySelector(".video");
const closeVideo = document.querySelector(".close-video");
const watch = document.querySelector(".watch");
const videoPlay = document.querySelector(".video-play");

playVideo.addEventListener("click", function () {
    watch.classList.add("view");
    videoPlay.setAttribute(
        "src",
        "https://www.youtube.com/embed/lzTgQvOKNBs"
    );
});
closeVideo.addEventListener("click", function () {
    watch.classList.remove("view");
    videoPlay.setAttribute("src", "");
});

// Show Contact pop - up
const pops = document.querySelectorAll(".req");
const pop = document.querySelector(".pop-form");
const cancel = document.querySelector(".cancel");

pops.forEach(function (popss) {
    popss.addEventListener("click", function () {
        pop.classList.add("view");
    });
    cancel.addEventListener("click", function () {
        pop.classList.remove("view");
    });
});

// Date Year

const year = document.querySelector(".year")

year.innerHTML = new Date().getFullYear()
