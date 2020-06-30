/**
 * Condicionales y ciclos
 */

/**
 * Ejemplo de Edad If multiples anidados 
 */
 let age = parseInt(prompt("Dime tu edad"),10)

 if(age){
    if(age >= 18){
        alert("Eres mayor de Edad")
    } else{
        alert("Te faltan Años")
    }
 } else{
     age = parseInt(prompt("Tu edad debe ser un Numero"),10)
 }

// Ejemplo de Condicion con el operador ternario
//  let message = age >= 18 ? "Eres mayor de Edad " : "Te faltan años"
//  alert(message)

/** Switch: when we want to compare one value with a value's serie we used switch*/

 let answer = prompt("Escoge un numero del 1 al 3")

 switch(answer){
    case '1':
         alert("Eres timido")
         break;
    case '2':
         alert("Eres Extrovertido")
         break;
    case '3': 
         alert("Eres muy Feliz")
         break;
    default:
        alert("Por favor escoge un numero del 1 al 3")
        break;
 }

/**
 * Otro ejemplo de switch 
 * Seleccionar opciones
 */

 let survey = prompt(`La capital de Colombia es:
 a. Bogotá
 b. Lima
 c. Madrid
 d. México
 e. La Paz`).toUpperCase().trim()

 switch(survey){
     case 'A':
         alert("¡Correcto!")
         break
     case 'B':
         alert("Te Equivocaste")
     default:
         alert("no has escrito una opcion valida")
         break
 }

/**
 * Ciclos
 */
/**
 * FOR
 * finding all the multiples of seven 
 */

// for(let i = 1; i <= 100; i++){
//     if (i % 7 === 0) console.log(i) // multiple of seven
//     if (i % 5 === 0) console.log(i) // multiple of fives
    
// }

//  for(let i = 0; i <= 100; i++){
//      if(i % 7 === 0) continue 
//      console.log(i)
//      if (i % 7 === 0) {
//          continue
//      }else {
//          console.log(i)
//      }

//  }
/**
 * % primeros numeros multiplos de 7
 */
// let n = 0
//  for(let i = 1; i <= 100; i++){
     
//      if( i % 7 === 0){
//          console.log(i)
//          n++
//      }
//     //  console.log(n)
//      if(n >= 5) break
//  }

/**
 * While
 */
// let i = 10
// while(i--){
//     console.log(i)
//     // i++
// }
/**
 * Do while
 * Autenticación de usuarios
 */
let password = 'EDteam'
let pass
do{
    pass = prompt(`Ingrese la contraseña`)
}
while(pass !== password)