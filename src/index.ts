import './index.scss'
let menuButtom: HTMLElement = document.getElementById('botton_menu')
let close_menu: HTMLElement = document.getElementById('close_menu')
let menuResponsive: HTMLElement = document.getElementById('menu_responsive')
let navBar : HTMLElement = document.getElementById('nav')
menuButtom.addEventListener('click', (event) => {
  menuResponsive.style.display = "flex";
})
close_menu.addEventListener('click', (event) => {
  menuResponsive.style.display = "none";
})
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 30) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
})

