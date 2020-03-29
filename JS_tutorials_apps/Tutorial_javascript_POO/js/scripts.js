
import Curso from "./clases/Curso.js"
import Usuario from "./clases/usuario.js"
import Profesor from "./clases/profesor.js"
import Alumno from "./clases/alumno.js"

// Instanciando objetos de la clase curso
// const HTML = new Curso("HTML from scratch", "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg", 10)


const elem = document.getElementById("cursos")

// Imprime un curso en el DOM
// Recibe un objeto de tipo curso
function mostrarCurso(curso) {
  const hijo = document.createElement('div')
  hijo.classList.add("card")
  hijo.innerHTML = `
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
    <div class="s-center">
    <span class="small">Clases: ${curso.getClases()}</span>
    </div>
  </div>
  `

  elem.appendChild(hijo)
}

// LLamada a la funcion mostrar curso
// mostrarCurso(HTML)

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
  e.preventDefault()
  const target = e.target
  const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)

  // console.log(target.nombreCurso.value)
  mostrarCurso(curso)
})

// const formAlumnos = document.getElementById("formAlumnos")
// formAlumnos.addEventListener("submit", e => {
//   e.preventDefault()
//   const target = e.target
//   const Alumno = new Alumno(target.nombreAlumno.value, target.apellidoAlumno.value, target.correoAlumno.value, target.cursoTomado.value)

// })


// const profe = new Profesor("Roger", "Acosta", "roger.acosta@cpven.com",true, ["React","Drupal"], 10)
// console.log(profe)

const alumno1 = new Alumno("Darianela", "Piñeiro", "darianela@cpven.com", false, ["HTML","CSS"])
const alumno2= new Alumno("Roger", "Acosta", "roger.acosta@cpven.com", true, ["NODE","GO","DRUPAL"])


const html = new Curso("HTML","html.png",8)

html.setInscritos([...html.getInscritos(), alumno1])

html.setInscritos([...html.getInscritos(), alumno2])
console.log(html)