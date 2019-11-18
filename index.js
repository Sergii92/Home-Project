$(document).ready(function () {
    $('.carousel').carousel({

    })
});
$('.dropdown-toggle').dropdown()


let roll = document.querySelectorAll(".roll")
let caption = document.querySelectorAll(".caption")


for (let i = 0; i < roll.length; i++) {
    roll[i].addEventListener("click", function () {
        caption[i].classList.toggle('caption_rolled')
    })
}
let burgerMenu = document.querySelector(".burger_menu")
let menu = document.querySelector(".menu")
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("burger_menu_active")
    menu.classList.toggle("menu_active")
})