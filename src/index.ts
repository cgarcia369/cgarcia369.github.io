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
    navBar.style.backgroundColor = "#2a4940";
    navBar.style.color = "white";
    menuButtom.style.fill = "white";
  } else {
    navBar.style.backgroundColor = "";
    navBar.style.color = "#353535";
    menuButtom.style.fill = "#353535";
  }
})

