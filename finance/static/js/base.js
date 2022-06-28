const menuBar = document.querySelector(".menu-bar");
const  navMenu = document.querySelector(".navbar");
menuBar.addEventListener("click",() => {
    menuBar.classList.toggle("active");
    navMenu.classList.toggle("active")
});

window.addEventListener('scroll',() =>{
    let navbar = document.getElementsByTagName('header');
    if(window.pageYOffset >= 96)
    {
        navbar.classList.add('sticky');
    }
    else
    {
        navbar.classList.remove('sticky');
    }
});