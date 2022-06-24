// Link for the swipe framework used: https://swiperjs.com/ 

/*==================== MENU SHOW & HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close') 

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


/*==================== PORTFOLIO TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('portfolio__active')
        })
        target.classList.add('portfolio__active' )

        tabs.forEach(tab => {
            tab.classList.remove('portfolio__active')
        })
        tab.classList.add('portfolio__active' )

    })
})

/*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll('[port-target]'),
//       tabContents = document.querySelectorAll('[port-content]')

// tabs.forEach(tab =>{
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification__active')

//         tabs.forEach(tab => {
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')

//     })
// })


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== Type Writer function ====================*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

// Array or list of words to write with the effect.
const textArray = ["Software Engineer", "Photographer", "Filmmaker", "Designer", "Thinker", "Problem solver"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


/*==================== Skills contants for the bar ====================*/

const skills = {
  softwareSkill: {
    html: 90,
    css: 80,
    javascript: 75,
    typescript: 70,
    reactnative: 70,
    react: 80,
    python: 70,
    r: 65,
    solidity: 60,
    mongoDB: 70,
    sql: 75,

  },
  technologiesSkills: {
    aws: 75,
    wserver: 80,
    ipfs: 90,
    vmware: 80,
    ospf: 70,
    linux: 70,
    wireshark: 70,
  },
  designSkills: {
    figma: 80,
    bootstrap: 80,
    projectMang: 75,
    procreate: 65,
    photoshop: 70,
    indesign: 60,
    illustrator: 40,
  },
};

for (const key in skills) {
  if (Object.hasOwnProperty.call(skills, key)) {
    const element = skills[key];

    for (const [key, value] of Object.entries(element)) {
      const skillContainer = document.getElementsByClassName(`skills-${key}`);

      if (skillContainer.length) {
        skillContainer[0].style.width = `${value}%`;
      }
    }
  }
}

/*==================== workaround Links for IPFS ====================*/

document.getElementById("instagram").onclick = function () {
    location.href = "https://instagram.com/costeronny";};

document.getElementById("twitter").onclick = function () {
    location.href = "https://twitter.com/costeronny";};

document.getElementById("linkedin").onclick = function () {
    location.href = "https://www.linkedin.com/in/ronnycoste";};

document.getElementById("github").onclick = function () {
    location.href = "https://github.com/lertsoft";};

document.getElementById("main").onclick = function () {
    location.href = "https://ronnycoste.com";};

document.getElementById("blog").onclick = function () {
    location.href = "https://blog.ronnycoste.com";};
        
document.getElementById("gallery").onclick = function () {
    location.href = "https://gallery.ronnycoste.com";};

document.getElementById("template").onclick = function () {
    location.href = "https://typescript-nextjs-template.vercel.app";};
    
document.getElementById("lifecycle").onclick = function () {
    location.href = "https://lifecycle380.herokuapp.com/";};
