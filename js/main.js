const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll ('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(altShowMenu) {
        cross.classList.remove('open');
        altNav.classList.remove('open');
        altMenuNav.classList.remove('open');
        altNavItems.forEach(item => item.classList.remove('open'));

        altShowMenu = false;
    }
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        
        showMenu = false;
    }
}

const altMenuBtn = document.querySelector('.resources-btn');
const cross = document.querySelector('.resources-btn_img');
const altNav = document.querySelector('.resources');
const altMenuNav = document.querySelector('.menu-resources');
const altNavItems = document.querySelectorAll('.menu-resources_item');

let altShowMenu = false;

altMenuBtn.addEventListener('click', toggleAltMenu);

function toggleAltMenu () {
    if (showMenu) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        
        showMenu = false;
    }

    if(!altShowMenu) {
        cross.classList.add('open');
        altNav.classList.add('open');
        altMenuNav.classList.add('open');
        altNavItems.forEach(item => item.classList.add('open'));

        altShowMenu = true;
    } else {
        cross.classList.remove('open');
        altNav.classList.remove('open');
        altMenuNav.classList.remove('open');
        altNavItems.forEach(item => item.classList.remove('open'));

        altShowMenu = false;
    }
}
