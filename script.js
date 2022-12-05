function menuShow() {
    let menuMobile = document.querySelector('.sidebar, .menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "HamburgerB36px.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "CloseP25px.svg";
    }
}
