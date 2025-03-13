const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

let menuStatus = false;


function menuToggle() {
if (menuStatus == false) {
    sideBar.style.transform = 'translateX(0)';
    sideBar.style.transition = '1500ms';
    menuStatus = true;
} else {
    sideBar.style.transform = 'translateX(-100%)';
    sideBar.style.transition = '1500ms';
    menuStatus = false;
}

}
toggleBtn.addEventListener ('click', menuToggle);

function closeMenu() {
    sideBar.style.transform = 'translate(-100%)';
}

closeBtn.addEventListener('click', closeMenu);