const myNav = document.querySelector("#navMod")
const burger = document.querySelector("#burger")
const closeNav = document.querySelector("#closeNav")

burger.addEventListener('click', ()=> {
    myNav.classList.toggle("is-active")
    burger.classList.toggle("is-active")
})

closeNav.addEventListener('click', ()=>{
    myNav.classList.toggle("is-active")
    burger.classList.toggle("is-active")
})