const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');
const xButton = document.getElementsByClassName('x-button');


const clickedBtn = function(){
    mobileMenu[0].classList.toggle('active');
}
menuBtn[0].addEventListener('click', clickedBtn);

const clickedX = function(){
    mobileMenu[0].classList.remove('active');
}
xButton[0].addEventListener('click', clickedX);
