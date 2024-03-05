import './style.css'
let body = document.querySelector('body')
let ulHeader = document.querySelector('#last-div-header')
let a = document.querySelectorAll('#last-div-header *')
let menu = document.querySelector('#menu-mobile')

let display = false

let menuMovile = () => {
  if (display == false) {
    setTimeout(() => {
      for (const element of a) {
        element.style.display = 'inline-block'
        display = true
      }
    }, 300)
  } else {
    for (const element of a) {
      element.style.display = 'none'
      display = false
    }
  }
}
menu.addEventListener('click', menuMovile)
