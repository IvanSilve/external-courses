userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
userMenuBtn.addEventListener('click', openMenu, {once: true});
function openMenu() {
    let userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
    userMenuBtn.classList.remove('user-menu-btn--closed');
    userMenuBtn.classList.add('user-menu-btn--opened');

    let header = document.getElementsByClassName('header')[0];
    let userMenu = document.createElement('ul');
    userMenu.classList.add('user-menu');
    let myAccount = document.createElement('li');
    myAccount.classList.add('user-menu__item');
    myAccount.setAttribute('href', '#');
    myAccount.innerHTML = "My account";
    let myTasks = document.createElement('li');
    myTasks.classList.add('user-menu__item');
    myTasks.setAttribute('href', '#');
    myTasks.innerHTML = "My tasks";
    let logOut = document.createElement('li');
    logOut.classList.add('user-menu__item');
    logOut.setAttribute('href', '#');
    logOut.innerHTML = "Log out";

    header.append(userMenu);
    userMenu.append(myAccount);
    userMenu.append(myTasks);
    userMenu.append(logOut);
    userMenuBtn.addEventListener('click', closeMenu);
    userMenuBtn.addEventListener('blur', closeMenu);
}
function closeMenu() {

    let userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
    userMenuBtn.classList.remove('user-menu-btn--opened');
    userMenuBtn.classList.add('user-menu-btn--closed');
    userMenuBtn.removeEventListener('click', closeMenu);
    userMenuBtn.removeEventListener('blur', closeMenu);

    let userMenu = document.getElementsByClassName('user-menu')[0];
    userMenu.classList.add('user-menu--close');
    setTimeout(function () {
        userMenu.remove();
        userMenuBtn.addEventListener('click', openMenu, {once: true});
    }, 560);
}
