// Ejemplos de Callback
const setText = data => {
  myContent.textContent = data
}

// const getData = callback => {
//   setText('Solicitando Autorización')
//   setTimeout(() => {
//     callback(true)
//   }, 2000)
// }

// conversion a una PROMESA de la funcion de getData()
const getData = () => {
  return new Promise((resolve, reject) => {
    setText('Solicitando Autorización'),
      setTimeout(() => {
        resolve(true)
      }, 2000)

  })
}

// const showData = callback => {
//   setText('Esperando a mostrar la información')
//   setTimeout(() => {
//     callback({name: 'Roger'})
//   }, 2000)
// }

// conversion de la funcion showData a una PROMESA 
const showData = () => {
  return new Promise((resolve, reject) => {
    setText('Esperando a mostrar la información')
    setTimeout(() => {
      resolve({
        name: 'Roger'
      })
    }, 2000)
  })
}

// btn.addEventListener('click', () => {
//   getData(authorization => {
//     if (authorization) {
//       showData(user => {
//         setText(user.name)
//       })
//     }
//   })
// })

/// conversion del codigo de arriba a una PROMESA

// btn.addEventListener('click', () => {
//   getData().then(authorization => {
//     if(authorization){
//       return showData()
//       }
//     }).then(user => {
//       setText(user.name)
//   })
// })

/// agregar async "Antes de la ejecucion de la funcion"

btn.addEventListener('click', async () => {
  let user = null
  const authorization = await getData()
  if (authorization) {
    user = await showData()
    setText(user.name)
  }
  
})