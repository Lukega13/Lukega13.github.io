//Animation of Lucas
let home_name = document.querySelectorAll("#info-texts h1 span")

home_name.forEach(letter => letter.addEventListener("mouseover", () => {

    letter.classList.add('home-name-hover')
    setTimeout(() => { letter.classList.remove('home-name-hover') }, 600)
}))



// #Skills Carousel Items
const divCarousel = document.querySelector("div#carousel-inner");

const carouselContent = document.querySelector("div.carousel-items");

let carouselContents = [
    {
        carousel_id: 'carousel-item-1',
        img1: './img/html.png',
        title: 'Html & CSS',
        subtitle: 'Front-End',
        subitle2: 'Web Development',
        text: 'Modern websites and applications with responsive design and great UI/UX'
    },
    {
        carousel_id: 'carousel-item-2',
        img1: './img/javascript.png',
        title: 'Javascript',
        subtitle: 'Object-Oriented',
        subitle2: 'App Development',
        text: 'Development of applications and websites with dinamic informations'
    },
    {
        carousel_id: 'carousel-item-3',
        img1: './img/react.png',
        title: 'React JS',
        subtitle: 'Reactive Interfaces',
        subitle2: 'Single Page Applications',
        text: 'Creation of interactive UIs with more efficient updating and rendering of the application'
    },
    {
        carousel_id: 'carousel-item-4',
        img1: './img/typescript.png',
        title: 'TypeScript',
        subtitle: 'Error Reduction',
        subitle2: 'Better Documentation',
        text: 'Static type definitions that describes the shape of objects, to avoid textual typing errors during application development'
    },
    {
        carousel_id: 'carousel-item-5',
        img1: './img/next-js.svg',
        title: 'Next.js',
        subtitle: 'Hybrid Static',
        subitle2: 'Server Rendering',
        text: 'Boots React with pre-rendering pages ate built time (SSG) or requested time (SSR) and correction of SIO'
    },
    {
        carousel_id: 'carousel-item-6',
        img1: './img/node-js.png',
        title: 'Node.js',
        subtitle: 'Back-End',
        subitle2: 'Server-Side JS',
        text: 'Building scalable network applications, use of Javascript to develop even the application serve-side'
    },
    {
        carousel_id: 'carousel-item-7',
        img1: './img/mysql.png',
        title: 'MySQL',
        subtitle: 'Data storage',
        subitle2: 'Database management',
        text: 'Creation of relational database for applications using the SQL language, with low cost and high flexibility'
    },
    {
        carousel_id: 'carousel-item-8',
        img1: './img/github-icon.png',
        title: 'GitHub',
        subtitle: 'Code Hosting',
        subitle2: 'Versioning Control',
        text: 'Better teamwork organization, collaboration with other projects and optimization of project storage'
    }
]

carouselContents.map(content => {
    const carouselClone = carouselContent.cloneNode(true);

    carouselClone.setAttribute("id", content.carousel_id);
    carouselClone.setAttribute("class", 'carousel-items');
    carouselClone.querySelector(".carousel-header .img-1").src = content.img1;
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

slider.style.width = `calc(100vw/3 * ${totalSlides})`
document.querySelector('#slider-controls').style.height = `${document.querySelector('#carousel').clientHeight}px`

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

// Slide Interval
let slideInterval = null

function interval(flag) {
    if (flag) {
        slideInterval = setInterval(goNext, 10000);
    } else {
        clearInterval(slideInterval)
    }
}

window.onload = document.body.clientWidth <= 690 ? interval(false) : interval(true)


// Slide on Center
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

    } else {
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
        card_id: "card-1",
        type: "js",
        thumb: "./img/snake-banner.jpg",
        url: "https://github.com/Lukega13/Snake"
    },
    {
        card_id: "card-2",
        type: "html-css",
        thumb: "./img/slide-4.jpg",
        url: "https://github.com/Lukega13/Snake"
    },
    {
        card_id: "card-3",
        type: "react",
        thumb: "./img/slide-3.jpg",
        url: "https://github.com/Lukega13/Snake"
    },
    {
        card_id: "card-4",
        type: "js",
        thumb: "./img/slide-2.jpg",
        url: "https://github.com/Lukega13/Snake"
    },
    {
        card_id: "card-5",
        type: "html-css",
        thumb: "./img/slide-1.jpg",
        url: "https://github.com/Lukega13/Snake"
    },
    {
        card_id: "card-6",
        type: "js",
        thumb: "./img/Perfil.jpeg",
        url: "https://github.com/Lukega13/Snake"
    }
]


cardContent.map(content => {
    const cardClone = card.cloneNode(true);

    cardClone.setAttribute("id", content.card_id);
    cardClone.querySelector(".card-image img").src = content.thumb;
    cardClone.querySelector(".card-image").setAttribute("href", content.url)

    divCards.appendChild(cardClone);
});

card.remove();




// Filters Skills
let buttons = document.querySelectorAll(".filters")
let cards_shown = document.querySelectorAll(".card")

let filtersArray = [

    {
        element: buttons[0].childNodes[1],
        condition: 'all'
    },
    {
        element: buttons[1].childNodes[1],
        condition: 'js'
    },
    {
        element: buttons[2].childNodes[1],
        condition: 'html-css'
    },
    {
        element: buttons[3].childNodes[1],
        condition: 'react'
    },

]

filtersArray.forEach(x => {
    x.element.addEventListener("click", () => { ativarFilters(`${x.condition}`) })
})
window.onload = ativarFilters('all')


function ativarFilters(filter) {

    for (i = 0; i < 4; i++) {
        buttons[i].childNodes[1].classList.remove("filter-checked")
    }

    document.getElementById("filters-" + filter).classList.add("filter-checked")


    // Display selected items
    if (filter == 'all') {

        for (let i = 0; i < cards_shown.length; i++) {

            cards_shown[i].style.display = 'block'

            //PROVISÓRIO
            // divCards.style.display = 'grid'

        }

    } else {

        for (let i = 0; i < cards_shown.length; i++) {

            let cardType = cardContent[i].type

            if (cardType.indexOf(filter) === 0) {

                cards_shown[i].style.display = 'block'

                //PROVISÓRIO
                // divCards.style.display = 'flex'

            } else {

                cards_shown[i].style.display = 'none'

            }

        }

    }
}


// Load animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration: 1500,
    reset: true
});

sr.reveal('.cards, #filters, #info-text, #info-image, #about-text, #about-image, #slider-controls')

window.onload = document.body.clientWidth <= 690 ? sr.reveal('.carousel-items') : sr.reveal('#carousel')



// Header Scroll
window.addEventListener("scroll", stickyHeader)

function stickyHeader() {
    let header = document.getElementById("navbar");
    let content = document.getElementById("info-container")
    let sticky = header.offsetTop

    if (window.pageYOffset > sticky) {

        header.classList.add("fixed-header")
        content.style.marginTop = `${header.clientHeight}px`

    } else {
        header.classList.remove("fixed-header")
        content.style.marginTop = '0px'
    }
}
window.onload = stickyHeader()



// Active links header
const navLink = document.querySelectorAll('.nav_link');

window.addEventListener('scroll', navLinkActivation)

function navLinkActivation() {

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

window.onload = navLinkActivation()



// Header Mobile

let show = true;

const menuSection = document.querySelector("#nav-right")
const menuToggle = menuSection.querySelector("#nav-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

// Close the Header Mobile clicking on the Urls

navLink.forEach(n => n.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.remove("on")
    show = true;
}))


// Home link on the Logo on Mobile Screens
let logo_link = document.querySelector('#logo a')

window.onload = document.body.clientWidth <= 690 ? logo_link.href = '#' : ''
