const exitBtn = document.querySelector(".left-nav__exit")
const burgerBtn = document.querySelector(".header__bars")
const leftNav = document.querySelector(".left-nav")

exitBtn.addEventListener("click", ()=> {
    leftNav.classList.add("left-nav__exit-transform")
})
burgerBtn.addEventListener("click", ()=> {
    leftNav.classList.remove("left-nav__exit-transform")
})