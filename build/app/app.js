"use strict";var burgerMenu=document.querySelector("#nav-opener"),openNavigation=document.querySelector(".full-screen-navigation");burgerMenu.addEventListener("click",function(){openNavigation.classList.remove("nav-close")}),openNavigation.addEventListener("click",function(e){e.currentTarget.classList.add("nav-close")});