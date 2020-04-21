userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
userMenuBtn.addEventListener('click', openMenu, {once: true});
function openMenu() {
    let userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
    userMenuBtn.classList.remove('user-menu-btn--closed');
    userMenuBtn.classList.add('user-menu-btn--opened');

    let main = document.getElementsByClassName('main')[0];
    let userMenu = document.createElement('nav');
    userMenu.classList.add('user-menu');
    let myAccount = document.createElement('a');
    myAccount.classList.add('user-menu__item');
    myAccount.setAttribute('href', '#');
    myAccount.innerHTML = "My account";
    let myTasks = document.createElement('a');
    myTasks.classList.add('user-menu__item');
    myTasks.setAttribute('href', '#');
    myTasks.innerHTML = "My tasks";
    let logOut = document.createElement('a');
    logOut.classList.add('user-menu__item');
    logOut.setAttribute('href', '#');
    logOut.innerHTML = "Log out";

    main.prepend(userMenu);
    userMenu.append(myAccount);
    userMenu.append(myTasks);
    userMenu.append(logOut);
    userMenuBtn.addEventListener('click', closeMenu, {once: true});
}
function closeMenu() {
    let userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
    userMenuBtn.classList.remove('user-menu-btn--opened');
    userMenuBtn.classList.add('user-menu-btn--closed');

    let userMenu = document.getElementsByClassName('user-menu')[0];
    userMenu.classList.add('user-menu--close');
    setTimeout(function () {
        userMenu.remove();
        userMenuBtn.addEventListener('click', openMenu, {once: true});
    }, 600);
}
