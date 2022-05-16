const menuIcon = document.querySelector('.menu_icon')
const mobileMenu = document.querySelector('.mobile-nav')



let xOrY = ['translateX', 'translateY']
let plusOrMinus = [-100, 100]
let rndAxis = Math.floor(Math.random() * xOrY.length)
let rndPlusOrMinus = Math.floor(Math.random() * plusOrMinus.length)
window.addEventListener('DOMContentLoaded', ()=> {
  if(rndAxis === 0) {
    mobileMenu.style.transform = `${xOrY[0]}(${plusOrMinus[rndPlusOrMinus]}vw)`
  } else {
    mobileMenu.style.transform = `${xOrY[1]}(${plusOrMinus[rndPlusOrMinus]}vh)`
  }
})

const mobileMenuOpen = () => {
  rndAxis = Math.floor(Math.random() * xOrY.length)
  rndPlusOrMinus = Math.floor(Math.random() * plusOrMinus.length)
  if(menuIcon.matches('.active')) {
    menuIcon.classList.remove('active')
    for(let i = 0; i < menuIcon.children.length; i++) {
      menuIcon.children[i].classList.remove('dark-line')
    }
    mobileMenu.classList.remove('active')
    if(rndAxis === 0) {
      mobileMenu.style.transform = `${xOrY[0]}(${plusOrMinus[rndPlusOrMinus]}vw)`
    } else {
      mobileMenu.style.transform = `${xOrY[1]}(${plusOrMinus[rndPlusOrMinus]}vh)`
    }
    mobileMenu.style.opacity = '0'
    mobileMenu.style.transition = 'transform 1s ease-in-out, opacity 1s .5s'


  } else {
    menuIcon.classList.add('active')
    for(let i = 0; i < menuIcon.children.length; i++) {
      menuIcon.children[i].classList.add('dark-line')
    }
    mobileMenu.classList.add('active')
    // let rndAxis = Math.floor(Math.random() * xOrY.length)
    // let rndPlusOrMinus = Math.floor(Math.random() * plusOrMinus.length)
    if(rndAxis === 0) {
      mobileMenu.style.transform = `${xOrY[0]}(0vw)`
    } else {
      mobileMenu.style.transform = `${xOrY[1]}(0vh)`
    }
    // mobileMenu.style.transform = 'translateX(0)'
    mobileMenu.style.opacity = '1'
    mobileMenu.style.transition = 'transform 1s ease-in-out, opacity 1s'
  }
}

menuIcon.addEventListener('click', mobileMenuOpen)
