let hamburger = document.querySelector(".navBar .theBox .hamburger");
let navLinks = document.querySelector(".navBar .navLinks");
let closeMenu = document.querySelector(".navBar .closeMenu img")
let navLinksUl = document.querySelector(".navBar .navLinks ul");
const toggleOn = (e) => {
    e.preventDefault;
        navLinksUl.style.animation = "ul-in 250ms ease-in-out 0s 1 normal forwards";
        navLinks.style.display = "flex";
        closeMenu.style.display = "flex";
}
const toggleOff = (e)=> {
    e.preventDefault;
    navLinksUl.style.animation = "ul-off 250ms ease-in-out 0s 1 normal forwards";
    navLinks.style.display = "flex";
    closeMenu.style.display = "none";
}
hamburger.addEventListener("click",toggleOn);
closeMenu.addEventListener("click",toggleOff);