let blockMainSideMenuBtnClose = document.getElementById("blockMainSideMenuClose");
let blockMainSideMenuBtnOpen = document.getElementById("blockMainSideMenuOpen");
let blockMainMenuAnimated = document.querySelector('.blockMainMenuAnimated');

blockMainSideMenuBtnOpen.addEventListener('click', f_showBlockMainSideMenu);
blockMainSideMenuBtnClose.addEventListener('click', f_closeBlockMainSideMenu);

function f_showBlockMainSideMenu() {

    blockMainMenuAnimated.classList.add('blockSideMShow');
    blockMainMenuAnimated.classList.remove('blockSideMHide');
    blockMainSideMenuBtnOpen.style.display = "none";
    blockMainSideMenuBtnClose.style.display = "block";

    admin.closeInfoModal();   // Hiding modal-dialog-cards
}

function f_closeBlockMainSideMenu() {
    blockMainMenuAnimated.classList.remove('blockSideMShow');
    blockMainMenuAnimated.classList.add('blockSideMHide');
    blockMainSideMenuBtnOpen.style.display = "block";
    blockMainSideMenuBtnClose.style.display = "none";
}