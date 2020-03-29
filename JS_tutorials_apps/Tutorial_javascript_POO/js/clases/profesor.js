import Usuario from "../clases/usuario.js"

export default class Profesor extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosDictatos, calificación){
    super(nombres, apellidos, correo, activo)
    this.cursosDictatos = cursosDictatos
    this.calificación = calificación
  }
}