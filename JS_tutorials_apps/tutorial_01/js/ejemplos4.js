/**
 * Arrays
 */
/**
 * Funcion para revertir texto
 */
// const reverseText = string => string.split('').reverse().join('')

// console.log(reverseText("Hola mundo"))

/**
 * Sort(callback)
 */
// let arr = ['a','f','z','b']

// console.log(arr.sort().reverse())
// // arr.sort().reverse()

let numbers = [10,111,1000,20,32,45,76]
// let arr = []

// console.log(numbers.sort((a,b) => a - b))

// console.log(numbers.find(number => number > 100))

// console.log([...new Set(numbers)])

/**
 * 
 *Spread Operator for arrays
 */

// const removeDuplicates = arr => [...new Set(arr)]

// console.log(removeDuplicates(['a','b','a']))

// console.log(Math.max(...numbers))

/**
 * Recorrer arrays con for y for of
 */
let arr = ['a','b','c','d','e','f']

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     }

/**
 * For of 
 */
// for(let element of arr){

//     console.log(element)
// }
/**
 * Ejemplo 2
 */
let teachers = ['Alexys','Roger','Miguel','Beto','Daniel','Jóse']

// for(let teacher of teachers){
//     console.log(teacher[0] + 'B')
// }

// for(let teacher of teachers){
//     console.log(teachers.indexOf(teacher))
// }

/**
 * forEach()
 */
// teachers.forEach( (el,i,arr) => {
//     console.log(el)
//     console.log(i)
//     console.log(arr)
// })

/**
 * el cuadrado de los numeros en el array numbers
 */

let arr2 = []

//  console.log(numbers.forEach(el => {
//     arr2.push(el*el)
//  }))

/**
 * some()
 */

// teachers.some( el => el === "Alexys")

/**
 * every()
 */
// teachers.every(el => el.includes('a'))

// teachers.every(el => el.length >= 3)

/**
 * map() y filter()
 */
// let otherArray = numbers.filter( el => el > 50)
// console.log(otherArray)
// let newArray = numbers.map( el => el*el)
// console.log(newArray)