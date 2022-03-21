let burger = document.getElementById('navbar-burger')
let navMenu = document.getElementsByClassName('navbar-menu')

burger.addEventListener('click', (e)=>{
    let element = e.target
    element.classList.toggle('is-active')
    navMenu[0].classList.toggle('is-active')
})