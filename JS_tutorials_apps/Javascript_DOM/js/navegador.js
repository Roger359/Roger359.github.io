/// responsive tester
// const form = document.getElementById('responsive-tester-form')

// if(form){
//   form.addEventListener('submit', () => {
//     let width = form.querySelector('#width'),
//         height = form.querySelector('#height'),
//         url = form.querySelector('#url')

//     if(width && height && url){
//       width = width.value
//       height = height.value
//       url = url.value 
//     }

//     window.open(url, url,`innerWidth=${width}, innerHeight=${height}`)
//   })
// }

/// setTimeout example
// setTimeout( () =>{
//   alert('Hola Mundo')
// },2000)

/// setInterval(callback,ms)
// let contador = 0
// const saludarMuchasVeces = setInterval(() =>{
//   contador++
//   if(contador > 1){
//     console.log(`Hola ${contador} veces`)
//   }else{
//     console.log(`Hola ${contador} vez`)
//   }

//   if(contador === 20){
//     clearInterval(saludarMuchasVeces)
//   }
// },1000)



// console.log(new Date().toLocaleTimeString())

/// tolocaleTimeString() method
// setInterval(() => {
//   const clock = document.getElementById('clock')
//   if(clock)  clock.textContent = new Date().toLocaleTimeString()
// })

/// objeto Date()

// const now = new Date()
// console.log(now)

const aniversario = new Date(2000,4,21)
console.log(aniversario)