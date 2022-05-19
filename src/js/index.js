const menuIcon = document.querySelector('.menu_icon')
const mobileMenu = document.querySelector('.mobile-nav')
const flyingTitle = document.querySelector('.flying-title')
const cardContainer = document.querySelector('.card-container')
const cardButton = cardContainer.querySelectorAll('input')
const hero = document.querySelector('.hero')
const heroButton = hero.querySelector('button')




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

if(window.location.href.includes('index.html') || window.location.href.includes('quote.html') ){
  let roles = ['Services','Apps','Maintenance', 'Accessibility','Architect', 'Developer']
  let count = 0
  setInterval(()=> {
    if(count === roles.length) count = 0
    flyingTitle.textContent = roles[count]
    flyingTitle.style.filter = 'blur(0)'
    flyingTitle.style.transition = 'all 1s'
    setTimeout(()=> {
      flyingTitle.style.filter = 'blur(20px)'
    }, 1500)
    count++
  }, 3000)
}

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
heroButton.addEventListener('click', ()=> {
  window.location = '#services'
})
cardButton.forEach((button) => {
  button.addEventListener('click', () => {
    window.location = '/pages/quote.html'
  })
})
