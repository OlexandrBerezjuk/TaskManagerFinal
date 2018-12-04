function f_hideMenu() {
    let menuAnimate = document.getElementById('menuAnimate');
    let blockMainMenuAnimate = document.getElementById("blockMainMenuAnim");


    menuAnimate.style.right = '-' + menuAnimate.clientWidth + 'px';
    menuAnimate.style.opacity = 1;

    blockMainMenuAnimate.style.left = '-' + blockMainMenuAnimate.clientWidth + 'px';
    blockMainMenuAnimate.style.opacity = 1;

    //- **********************************************************************************************
    //- this code allows to transfer blocks inside .head block when body width is more than 1920px
    //- **********************************************************************************************
    if (document.body.clientWidth > 5700) {
        var t = (40 * document.body.clientWidth) / 100;
        let h = document.querySelector('.headerMenuScrollable');
        h.style.paddingLeft = t + 'px';
        h.style.paddingRight = t + 'px';
    }

    if (document.body.clientWidth > 1920 && document.body.clientWidth < 5700) {
        var t = (30 * document.body.clientWidth) / 100;
        let h = document.querySelector('.headerMenuScrollable');
        h.style.paddingLeft = t + 'px';
        h.style.paddingRight = t + 'px';
    }

    if (document.body.clientWidth < 1920) {
        let h = document.querySelector('.headerMenuScrollable');
        h.style.paddingLeft = "inherit";
        h.style.paddingRight = "inherit";
    }
};


//This code is aimed to hide side menu bar using keyframes animation above

//This code animates hiding of side-menu-bar


let btnCloseSideMenu = document.getElementById("menuAnimateBtnClose");
let btnOpenSideMenu = document.getElementById("menuAnimateBtnOpen");
let menuAnimate = document.getElementById('menuAnimate');

btnCloseSideMenu.addEventListener('click', f_hide);
btnOpenSideMenu.addEventListener('click', f_showMainSideMenu);


function f_showMainSideMenu() {
    let menuAnimate = document.getElementById('menuAnimate');
    menuAnimate.classList.add('no1');
    menuAnimate.classList.remove('no2');
    //When side menu is shown we hide burger-menu
    let barsBurger = document.getElementById('menuAnimateBtnOpen');
    barsBurger.style.opacity = 0;

    if (admin != null) {
        admin.closeInfoModal();  // Hiding modal-dialog-cards
    }


    //This code is aimed to close side menu when we tapped on the screen
    let header = document.querySelector(".header");
    let blockMain = document.querySelector(".blockMain");
    let gallery = document.getElementById("sliderBlock");
    let contacts = document.querySelector(".contacts");
    let footer = document.querySelector(".footer");
    header.addEventListener('click', f_hide);
    blockMain.addEventListener('click', f_hide);
    gallery.addEventListener('click', f_hide);
    contacts.addEventListener('click', f_hide);
    footer.addEventListener('click', f_hide);
}
function f_hide() {
    let menuAnimate = document.getElementById('menuAnimate');
    menuAnimate.classList.add('no2');
    menuAnimate.classList.remove('no1');
    //When side menu is being hidden we show burger menu back again
    let barsBurger = document.getElementById('menuAnimateBtnOpen');
    barsBurger.style.opacity = 1;

    //This code is aimed to close side menu when we tapped on the screen
    let header = document.querySelector(".header");
    let blockMain = document.querySelector(".blockMain");
    let contacts = document.querySelector(".contacts");
    let footer = document.querySelector(".footer");
    header.removeEventListener('click', f_hide);
    blockMain.removeEventListener('click', f_hide);
    contacts.removeEventListener('click', f_hide);
    footer.removeEventListener('click', f_hide);

}

//this allows you to smoothly move around the page

let home = document.getElementById("home");
let manager = document.getElementById("Manager");
let gallery = document.getElementById("Gallery");
let contact = document.getElementById("contact");

let headerB = document.querySelector("header");
let mainB = document.querySelector(".blockMain");
let galleryB = document.querySelector(".sliderBlock");
let headerMenuScrollable = document.querySelector(".headerMenuScrollable");

home.addEventListener('click', function () {
    window.scrollTo(0, 0);
});
manager.addEventListener('click', function () {
    let offset = headerB.offsetHeight - headerMenuScrollable.offsetHeight;             //
    window.scrollTo(0, offset);
});
gallery.addEventListener('click', function () {
    let offset = headerB.offsetHeight + mainB.offsetHeight - headerMenuScrollable.offsetHeight;  //headerMenuScrollable.offsetHeight
    window.scrollTo(0, offset);
});
contact.addEventListener('click', function () {
    let offset = headerB.offsetHeight + mainB.offsetHeight + galleryB.offsetHeight - headerMenuScrollable.offsetHeight;   //headerMenuScrollable.offsetHeight
    window.scrollTo(0, offset);
});

