 export default class Usuario {
  constructor(nombres, apellidos, correo, activo){
   
   this.nombres = nombres,
   this.apellidos = apellidos,
   this.correo = correo,
   this.activo = activo
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