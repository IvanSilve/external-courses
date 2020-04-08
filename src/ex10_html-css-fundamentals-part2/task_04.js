let menuButton = document.getElementsByClassName('menuButton');
let menu = document.getElementsByClassName('menu');

menuButton[0].onclick = openMenu;

function openMenu() {
    menu[0].classList.toggle('active');
    menuButton[0].classList.toggle('active');
}