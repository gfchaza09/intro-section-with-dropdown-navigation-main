"use strict";

const features = document.getElementById("features");
const company = document.getElementById("company");

const linkFeatures = document.getElementById("link-features");
const linkCompany = document.getElementById("link-company");
const btnMenuOpen = document.querySelector(".btn__menu--open");
const btnMenuClose = document.querySelector(".btn__menu--close");

const menuLateral = document.getElementById("menu-lateral");
const opacity = document.querySelector(".opacity");

linkFeatures.addEventListener("click", () => {
    features.classList.toggle("show--submenu");
    company.classList.remove("show--submenu");
    linkCompany.lastChild.src = "css/images/icon-arrow-down.svg";
    linkCompany.lastChild.alt = "icon-arrow-down";

    if(linkFeatures.lastChild.alt == "icon-arrow-down") {
        linkFeatures.lastChild.src = "css/images/icon-arrow-up.svg";
        linkFeatures.lastChild.alt = "icon-arrow-up";
    } else {
        linkFeatures.lastChild.src = "css/images/icon-arrow-down.svg";
        linkFeatures.lastChild.alt = "icon-arrow-down";
    }
});

linkCompany.addEventListener("click", () => {
    company.classList.toggle("show--submenu");
    features.classList.remove("show--submenu");
    linkFeatures.lastChild.src = "css/images/icon-arrow-down.svg";
    linkFeatures.lastChild.alt = "icon-arrow-down";

    if(linkCompany.lastChild.alt == "icon-arrow-down") {
        linkCompany.lastChild.src = "css/images/icon-arrow-up.svg";
        linkCompany.lastChild.alt = "icon-arrow-up";
    } else {
        linkCompany.lastChild.src = "css/images/icon-arrow-down.svg";
        linkCompany.lastChild.alt = "icon-arrow-down";
    }
});

btnMenuOpen.addEventListener("click", ()=> {
    menuLateral.classList.toggle("menu--open");
    opacity.classList.toggle("menu--open");
});

btnMenuClose.addEventListener("click",()=> {
    menuLateral.classList.toggle("menu--open");
    opacity.classList.toggle("menu--open");
})