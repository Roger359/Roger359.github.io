/**
 * Funciones
 * ${} polarizar
 */

//  function saludar(persona,sexo){
//     let saludo = sexo === 'm'
//                 ? 'Bienvenido'
//                 : 'Bienvenida' 
//     return `${saludo} a EDteam, ${persona}`

//     //  return sexo === 'm'
//     //          ? `Bienvenidos a EDteam ${persona}`
//     //          : `Bienvenida a EDteam ${persona}`
//  }  

//  console.log(saludar('Roger', 'm'))
//  console.log(saludar('Miguel', 'm'))
//  console.log(saludar('Acosta', 'm'))
//  console.log(saludar('Maria', 'f'))

/**
 * Funciones de Flechas
 */

//  const saludar = (persona, sexo) => {
//      let saludo = sexo === 'm'
//                 ? 'Bienvenido'
//                 : 'Bienvenida'
//     return `${saludo} a EDteam, ${persona}`
//  }
//  console.log(saludar('Maria', 'f'))
//  console.log(saludar('Roger', 'm'))
//  console.log(saludar('Miguel', 'm'))

/**
 * EJemplo de suma con nomenclatura fleca
 */
// const sumar = (a,b) => a + b
// console.log(sumar(1,4))
// console.log(sumar(3,9))

/**
 * Funciones con flechas pero con parametros con argumentos por defecto
 * 
 */
// const saludar = (persona = 'visitante', sexo = 'm') => { 
//     let saludo = sexo === 'm'
//                 ? 'Bienvenido'
//                 : 'Bienvenida'
//     return `${saludo} a EDteam, ${persona}`
// }

// console.log(saludar('Maria', 'f'))
// console.log(saludar('Roger'))
// console.log(saludar('Miguel'))
// console.log(saludar())

/**
 * Spread Operator 
 * parametros rest
 */
// const sumarTodos = (...numeros) => {
//     // console.log(numeros[4])
//     let resultado = 0
//     for(let i = 0; i < numeros.length; i++){
//         resultado += numeros[i]
//     }
//     return resultado
// }
// console.log(sumarTodos(1,2,35,4,5,6,7))

/**
 * Ejercicio para el tema de funciones como ciudadanos de primera clase
 * 
 * cuando no se ponen los parentesis no estas ejecutan una funcion
 * estas invocando sus parametros para ser calculados
 * mientras que si llamas a la funcion con los parentesis estas invocando al resultado
 * de la función.
 */

 const c = console.log 
// const multiplicar  = (a,b) => a * b
// c(multiplicar(3,5))

/**
 * Meter una 
 */
// let edad = multiplicar(5,4)
// c(edad)
// let edad2 = multiplicar(edad,2)
// // let edad2 = multiplicar(multiplicar(5,4),2)

// c(edad2)
// let edad2 = multiplicar(edad,2)

// function sumar(x){
//     return function(y){
//         return x +y
//     }
// }
// c(sumar(5)(2))

// const sumar = x => y => x + y
// c(sumar(10)(20))

// const doSomething = x => y => x * y

// const a = doSomething(2)(2) // 4
// const b = doSomething(3)    // y => x * y
// c(doSomething(a)(b(3)))    //

/**
 * Funciones Puras
 */

 let a = 'Hola'

//  const saludo = persona => {
//      a = a + ' ' + persona
//      return a
//  }
//  c(saludo('Luis'))
//  c(a)

// const saludar = (saludo,persona) => `${saludo} ${persona}`

// c(saludar(a,'Luis'))
// c(a)

/**
 * Funciones autoinvocadas
 */
// const saludar = ((saludo,persona) => `${saludo} ${persona}`)(a,'Roger')
// c(saludar)

/**
 * Funciones anonimas
 */
// setTimeout(() =>{
//     alert('Hola Roger')
// },3000)

/**
 * Closures
 */
// function aumentar () {
//     let numero =  0
//     return function() {
//         numero++
//         c(numero)
//     }
// }
// // aumentar()()

// const incremetar = aumentar()

// incremetar()
// incremetar()
// incremetar()
// incremetar()
// incremetar()

// let numero = 0

// function aumentar(){
//     numero++
//     c(numero)
// }
// aumentar()
// aumentar()
// aumentar()

/**
 * This
 */
let user = {
    nombre: 'Roger',
    edad: 29,
    getEdad(){
        c(this.edad)
    }
 
}

user.getEdad()