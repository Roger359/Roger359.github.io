// Objetos Literales

// const nombres = "Roger Miguel"
// const apellidos = "Acosta G."
// const edad = 29
// const padre = {
//   nombre: "Roger M. Acosta",
//   edad: 45
// }
// const hermanos = ["Claudia", "Mariela"]

// console.log(typeof(nombre))


// const alumno = {

//   // Atributos del Objeto
//   nombres: "Roger Miguel",
//   apellidos: "Acosta G.",
//   edad: 29,
//   hermanos: ["Claudia", "Mariela"],
//   padre: {
//     nombre: "Roger M. Acosta",
//     edad: 45
//   },

//   // Metodos
//   presentarse() {
//     console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años`)
//   },
//   whoIsYourFather(){
//     console.log(`Mi padre es ${this.padre.nomnre}`)
//   }
  
// }
// alumno.presentarse()
// alumno.whoIsYourFather()


// notacion numero 2 PARA OBJETOS
// const alumno = {
//   nombres: nombres,
//   apellidos: apellidos,
//   edad: edad,
//   hermanos: hermanos,
//   padre: padre

// }
 // notacion 3 para declarar objetos 
// const alumno = {
//   nombres,
//   apellidos,
//   edad,
//   hermanos,
//   padre

// }
// console.log(alumno)
// console.log(typeof(alumno))
// console.log(alumno)
// console.log(alumno.hermanos)
// console.log(alumno.padre)

// los objetos no puede ser modificados pero si sus atributos

// alumno.genero ="Masculino"

//
// Ejemplo de Usuario

const usuario1 = {

  // Atributos del Objeto
  nombres: "Roger Miguel",
  apellidos: "Acosta G.",
  edad: 29,
  correo: "roger.acosta@cpven.com",
  activo: true,
  presentarse(){
    console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años`)
  }
}
console.log(usuario1)


