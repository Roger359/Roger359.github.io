/// Manera antigua de ejecutar eventos 
// function holaMundo(){
//   alert('Hola Mundo')
// }

// const tittle = document.getElementById('title')
/// Estructura de un addEventlistener
// tittle.addEventListener('eventName', eventHandler) 

///  1 Forma de estrucutura mi callback function
// const holaMundo = text => alert(text)
// tittle.addEventListener('click', () => {
//   holaMundo('Los Eventos')
// })
///  2 Forma de estrucutura mi callback function
// const holaMundo = e => alert(e.target.textContent) // manera para leer text de un elemento 
// const holaMundo = e => console.log(e.target.textContent)
// tittle.addEventListener('click', e => {
//   holaMundo(e)
// })

/// manera usando un selector de css para ejecutar un evento click un
// document.querySelector('button').addEventListener('click', () => {
//   holaMundo('Saludar')
// })
// document.querySelector('button').addEventListener('click', e => {
//   holaMundo(e)
// })

/// Creacion de un menu contextual (Example)
// const createMenu = e => {
//   const menu = document.createElement('div')
//   const prevMenu = document.getElementById('context-menu')
//   menu.id = 'context-menu'
//   menu.textContent = 'Soy un Menu contextual'

//   if(prevMenu) document.body.removeChild(prevMenu)
//   document.body.appendChild(menu)

//   menu.style.padding = '1em'
//   menu.style.background = '#eee'
//   menu.style.position = 'fixed'
//   menu.style.top = `${e.pageY}px`
//   menu.style.left = `${e.pageX}px`
// }
// document.addEventListener('click', e => {
//   createMenu(e)
//   e.preventDefault()
// })

/// Ejemplo para eventos del teclado
// const input = document.getElementById('input')
// addEventListener('keydown', e => {
//   if(e.key === 'a' && e.ctrlKey === true){
//     e.preventDefault()
//     alert('CRTL A')
// }})

/// Ejercicio para mover una esfera con las flechas del teclado
// let x = 0, y = 0

// addEventListener('keyup', e => {
//   const ball = document.getElementById('ball')
//   // primera forma
//   // const move = () => ball.style.transform = `translate(${x*5}px,${y*5}px)`
//   // const up = () => {
//   //   y--
//   //   move()
//   //   console.log(x,y)
//   // }

//   // 
//   const move = direction => {
//     switch (direction) {
//       case 'up':
//         y--
//         break;
//       case 'down':
//         y++
//         break;
//       case 'left':
//         x--
//         break;
//       case 'right':
//         x++
//         break;
//       default:
//         break;
//     }
//     ball.style.transform = `translate(${x*5}px,${y*5}px)`
//   }
//   switch (e.key) {
//     case 'ArrowUp':
//       move('up')
//       break;
//     case 'ArrowDown':
//       move('down')
//       break;
//     case 'ArrowLeft':
//       move('left')
//       break;
//     case 'ArrowRight':
//       move('right')
//       break;
//     default:
//       break;
//   }
// })

/// Eventos de Formulario
// addEventListener('DOMContentLoaded', () => {

//   const form = document.getElementById('form')
//   const rememberPassword = document.getElementById('remember-password')
//   form.addEventListener('submit', () => {
//     console.log("ha enviado el formulario")
//   })
//   rememberPassword.addEventListener('change', e =>{
//     if(e.target.checked){
//       console.log('El usuario quiere recordar su contraseña')
//     }else{
//       console.log("El usuario NO quiere recordar su contraseña")
//     }
//   })
// })
// /// Evento Scroll
// // addEventListener('scroll', e => {
// //   console.log(scrollX, scrollY)
// // })

// addEventListener('resize', e => {
//   console.log(innerWidth, innerHeight)
//   console.log(outerWidth, outerHeight)
// })

// const video = document.getElementById('video'),
//       playButton = document.getElementById('play'),
//       pauseButton = document.getElementById('pause')

// playButton.addEventListener('click', () => {
//   video.play()
// })
// pauseButton.addEventListener('click', () => {
//   video.pause()
//   // playButton.click() Es un ejemplo de ejecucion de eventos
// })

// const div1 = document.getElementById('div-1')
// const div2 = document.getElementById('div-2')
// const div3 = document.getElementById('div-3')

// document.querySelectorAll('div').forEach( el => {
//   el.addEventListener('click', e => {
//     console.log(`Hiciste Click en el div ${e.target.id}`)
//     e.stopPropagation()
//   })
// })

/// ejmplo de delegacion de eventos
const gallery = document.getElementById('gallery')
gallery.addEventListener('click', e => {
  const t = e.target
  const images = Array.from(gallery.querySelectorAll('img'))
  const i = images.indexOf(t)
  console.log(`Hiciste click en la imagen ${i + 1}`)

})