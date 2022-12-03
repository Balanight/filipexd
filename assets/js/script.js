function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/HamburgerB36px.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/CloseP25px.svg";
    }
}