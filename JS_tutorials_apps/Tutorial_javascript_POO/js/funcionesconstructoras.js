// funcion Constructora, forma anterior a ES6

// function Usuario(nombres, apellidos, correo, activo) {

//   // Asignación de atributos
//   this.nombres = nombres,
//   this.apellidos = apellidos,
//   this.correo = correo,
//   this.activo = activo

// }
//  console.log(new Usuario("Roger", "Acosta", "Correo", true))


// Clases

class Usuario {
 constructor(nombres, apellidos, correo, activo, cursosDictatos, cursosTomados){
  
  this.nombres = nombres,
  this.apellidos = apellidos,
  this.correo = correo,
  this.activo = activo,
  this.cursosDictatos = cursosDictatos,
  this.cursosTomados = cursosTomados
 }
 presentarse(){
   return `Hola soy ${this.nombres} y mi correo es ${this.correo}`
 }
 // Getters
 getNombres(){
   return this.nombres
 }
 getApellidos(){
   return this.apellidos
 }
 // Setters
 setApellidos(nuevosApellidos){
  this.apellidos = nuevosApellidos
 }
}

//HERENCIA

class Profesor extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosDictatos){
    super(nombres, apellidos, correo, activo)
    this.cursosDictatos = cursosDictatos
  }
}
class Alumno  extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosTomados){
    super(nombres, apellidos, correo, activo)
    this.cursosTomados = cursosTomados
  }
}


 const roger = new Alumno("Roger", "Acosta", "roger.acosta@cpven.com", true, ["HTML", "CSS", "JS"])
 const darianela = new Profesor("Darianela", "Piñeiro", "darianela.piñeiro@cpven.com", true, ["React","Postgres"])

 console.log(roger)
 console.log(darianela)

//  console.log(Roger.presentarse())

//ejemplo de un seters
roger.setApellidos("Acosta G.")

 console.log(`${roger.getNombres()} ${roger.getApellidos()}`)

 // Tipos de metodos
 // Método getters y los setters
 // 


 