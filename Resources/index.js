// #Skills Carousel Items
const divCarousel = document.querySelector("div#carousel-inner");

const carouselContent = document.querySelector("div.carousel-items");

let carouselContents = [
    {
        carousel_id: 'carousel-item-1',
        img1: '../img/html.png',
        img2: '../img/css.png',
        title: '&lt;Html & CSS&gt;',
        subtitle: 'Web Development',
        subitle2: 'Object-Oriented',
        text: 'Modern websites and applications with responsive design and great UI/UX'
    },
    {
        carousel_id: 'carousel-item-2',
        img1: '../img/javascript.png',
        title: '&lt;Javascript&gt;',
        subtitle: 'Web Development',
        subitle2: 'Object-Oriented',
        text: 'Development of websites and applications with dinamic informations and great UI/UX'
    },
    {
        carousel_id: 'carousel-item-3',
        img1: '../img/css.png',
        title: '&lt;Javascript&gt;',
        subtitle: 'Web Development',
        subitle2: 'Object-Oriented',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tortor odio, aliquam posuere velit tincidunt non'
    },
    {
        carousel_id: 'carousel-item-4',
        img1: '../img/javascript.png',
        title: '&lt;Javascript&gt;',
        subtitle: 'Web Development',
        subitle2: 'Object-Oriented',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tortor odio, aliquam posuere velit tincidunt non'
    },
    {
        carousel_id: 'carousel-item-5',
        img1: '../img/javascript.png',
        title: '&lt;Javascript&gt;',
        subtitle: 'Web Development',
        subitle2: 'Object-Oriented',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tortor odio, aliquam posuere velit tincidunt non'
    },
    {
        carousel_id: 'carousel-item-6',
        img1: '../img/javascript.png',
        title: '&lt;Javascript&gt;',
        subtitle: 'Web Development',
        subitle2: 'Object-Oriented',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tortor odio, aliquam posuere velit tincidunt non'
    }
]

carouselContents.map(content => {
    const carouselClone = carouselContent.cloneNode(true);
    carouselClone.setAttribute("id", content.carousel_id);
    carouselClone.setAttribute("class", 'carousel-items');
    carouselClone.querySelector(".carousel-header .img-1").src = content.img1;

    if (content.img2 === undefined) {
        carouselClone.querySelector(".carousel-header").removeChild(carouselClone.querySelector(".carousel-header .img-2"))
    } else {
        carouselClone.querySelector(".carousel-header .img-2").src = content.img2;
    }
    carouselClone.querySelector(".carousel-title h1").innerHTML = content.title;
    carouselClone.querySelector(".carousel-title h2").innerHTML = content.subtitle;
    carouselClone.querySelector(".carousel-title h3").innerHTML = content.subitle2;
    carouselClone.querySelector(".carousel-content h1").innerHTML = content.text
    divCarousel.appendChild(carouselClone);
});

carouselContent.remove();



// #Skills Carousel 
let totalSlides = document.querySelectorAll(".carousel-items").length
const carousel = document.querySelector('#carousel');
const slider = document.querySelector('#carousel-inner');

slider.style.width = `calc(100vw/3 * ${totalSlides} - 20px)`
document.querySelector('#slider-controls').style.height = `${document.querySelector('#skills').clientHeight}px`

const next = document.querySelector('#carousel-next');
const prev = document.querySelector('#carousel-prev');
let direction = -1

next.addEventListener('click', goNext);
function goNext() {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(calc(-100vw/3))';

    slideFocus('next')
    loopElements()
    interval(false)
    interval(true)
}

prev.addEventListener('click', goPrev);
function goPrev() {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);

        loopElements()
        interval(false)
        interval(true)
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(calc(-100vw/3))';

    slideFocus('prev')
    loopElements()
    interval(false)
    interval(true)
}

function loopElements() { // get the last element and append it to the front

    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all ease 0.5s';
    })
}

let slideInterval = null

// function interval(flag) {
//     if (flag) {
//         slideInterval = setInterval(goNext, 5000);
//     } else {
//         clearInterval(slideInterval)
//     }
// }
// interval(true)

let slides = document.querySelectorAll('.carousel-items')
let focusedSlide = 1
window.onload = slides[focusedSlide].classList.add('slide-focus')

function slideFocus(way) {

    if (way == 'next') {
        focusedSlide++

        slides[focusedSlide - 1].classList.remove('slide-focus')

        if (focusedSlide > totalSlides - 1) {
            focusedSlide = 0
        }

        slides[focusedSlide].classList.add('slide-focus')

    } if (way == 'prev') {
        focusedSlide--

        slides[focusedSlide + 1].classList.remove('slide-focus')

        if (focusedSlide < 0) {
            focusedSlide = totalSlides - 1
        }

        slides[focusedSlide].classList.add('slide-focus')
    }

}


// #Portifolio Cards

const divCards = document.querySelector("div.cards");

const card = document.querySelector("div.card");

const cardContent = [
    {
        title: "The Snake Game built with pure Javascript and some HTML & CSS",
        card_id: "card-1",
        thumb: "../img/snake-banner.jpg",
        url: "https://github.com/Lukega13/Snake"
    },
    {
        title: "Desvendando o CSS Grid na prática | Mayk Brito",
        card_id: "card-2",
        thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg"
    },
    {
        title: "Array: Higher Order Functions | Mayk Brito",
        card_id: "card-3",
        thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg"
    },
    {
        title: "O que é API? REST e RESTful? | Mayk Brito",
        card_id: "card-4",
        thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg"
    },
    {
        title: "Desvendando a variável this no Javascript | Mayk Brito",
        card_id: "card-5",
        thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg"
    },
    {
        title:
            "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
        card_id: "card-6",
        thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg"
    }
]


cardContent.map(content => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id", content.card_id);
    cardClone.querySelector("img").src = content.thumb;
    cardClone.querySelector(".title").innerHTML = content.title;
    cardClone.querySelector(".see-more").setAttribute("href", content.url)
    divCards.appendChild(cardClone);
});

card.remove();



// Load animations

// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '50px',
//     duration: 700,
//     reset: true
// });
// sr.reveal('#skills-header h1')
// sr.reveal('#portifolio-header h1')

const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500,
    reset: true
});

srBottom.reveal('#carousel')
srBottom.reveal('.card')
srBottom.reveal('#portifolio-filters')
srBottom.reveal('#info-text')
srBottom.reveal('#info-image')
srBottom.reveal('#about-text')
srBottom.reveal('#about-image')





// Filters Skills
document.getElementById("filters-all").addEventListener("click", () => { ativarFilters('all') })
document.getElementById("filters-js").addEventListener("click", () => { ativarFilters('js') })
document.getElementById("filters-html-css").addEventListener("click", () => { ativarFilters('html-css') })
document.getElementById("filters-php").addEventListener("click", () => { ativarFilters('php') })

window.onload = ativarFilters('all')

function ativarFilters(botao) {
    var buttons = document.getElementsByClassName("filters")

    for (i = 0; i < 4; i++) {
        buttons[i].childNodes[1].classList.remove("filter-checked")
    }

    document.getElementById("filters-" + botao).classList.add("filter-checked")
}




// Header Scroll
window.addEventListener("scroll", stickyHeader)

function stickyHeader() {
    let header = document.getElementById("navbar");
    let content = document.getElementById("info-container")
    let sticky = header.offsetTop

    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-header")
        content.style.marginTop = '80px'
    } else {
        header.classList.remove("fixed-header")
        content.style.marginTop = '0px'
    }
}

window.onload = stickyHeader()


// Active links header

const navLink = document.querySelectorAll('.nav_link');

// function linkAction() {
//     /*Active link*/
//     navLink.forEach(n => n.classList.remove('nav_link-active'));
//     this.classList.add('nav_link-active');

//     /*Remove menu mobile*/

//     // const navMenu = document.getElementById('nav-menu')
//     // navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));


window.addEventListener('scroll', changeOpacity)

function changeOpacity() {

    if (document.getElementById("info-text").style.opacity == 1) {
        navLink.forEach(n => n.classList.remove('nav_link-active'));

        navLink[0].classList.add('nav_link-active')

    } if (document.getElementById("about-text").style.opacity == 1) {
        navLink.forEach(n => n.classList.remove('nav_link-active'));

        navLink[1].classList.add('nav_link-active')

    } if (document.getElementById("carousel").style.opacity == 1) {
        navLink.forEach(n => n.classList.remove('nav_link-active'));

        navLink[2].classList.add('nav_link-active')

    } if (document.getElementById("portifolio-filters").style.opacity == 1) {
        navLink.forEach(n => n.classList.remove('nav_link-active'));

        navLink[3].classList.add('nav_link-active')
    }

}

window.onload = changeOpacity()