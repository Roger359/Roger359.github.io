/// movernos entre elementos

// const parent = document.getElementById('parent')
// // console.log(parent.children)
// // console.log(parent.querySelectorAll('div'))
// // console.log(parent.childNodes)
// // console.log(parent.firstChild)
// console.log(parent.firstElementChild)

// const grandson = document.getElementById('grandson-2')
// // console.log(grandson.nextElementSibling)
// // console.log(grandson.previousElementSibling)
// console.log(grandson.parentElement)
// console.log(grandson.parentElement.parentElement)

// Insertar Elementos

// const parent = document.getElementById('parent')
// const newElement = document.createElement('h2')
// // const childs = Array.from(parent.children) // 1era forma
// const childs = Array.from(parent.querySelectorAll('div'))
// const childParent = childs.filter(child => child.children.length > 0)[0]
// const grandSons = Array.from(childParent.children)
// const grandSon3 = grandSons.filter(child => child.textContent.trim() === 'Nieto 3')[0]
// newElement.textContent = 'Soy un nuevo Elemento'
// childParent.insertBefore(newElement,grandSon3)

// const childWithChilds = childs.filter(child =>  child.children.length > 0)[0]

// parent.appendChild(newElement) // appendChild inserta al final del codigo


// parent.insertBefore(nuevo, nieto3)

// console.log(childs)

// Ejercicio de inserbefore
// const post = document.getElementById('post')
// const ad = document.createElement('div')
// ad.id = 'Roger'
// ad.textContent = 'Publicidad'

// const getMiddleChild = element => {
//   const childs = element.children,
//         l = childs.length,
//         i = Math.floor(l/2)
//   return childs[i]
// }
// // console.log(getMiddleChild(post))
// const middleChild = getMiddleChild(post)
// post.insertBefore(ad, middleChild)

// InsertAdjacent examplee

// const parent = document.getElementById('parent')
// const ad = document.createElement('div')
// ad.id = "roger"
// ad.textContent = "Publicidad"

// // parent.insertAdjacentElement('beforeend', ad)

// // replaceChild(newChild, oldChild)
// // parent.replaceChild(ad,parent.children[0])

// // Jquery Link
// // parent.before(ad)
// parent.children[0].replaceWith(ad)

/// 
// const teachers = ['Roger', 'Darianela', 'Cloy']
// const teacherList =  document.createElement('ul')
// const teacherListContainer = document.getElementById('teacher-list')
// const teacherListFragment = document.createDocumentFragment()
// teacherListContainer.appendChild(teacherList)

// for(let teacher of teachers){
//   const li = document.createElement('li')
//   teacherListFragment.appendChild(li)
//   li.textContent = teacher
// }

// teacherList.appendChild(teacherListFragment)

// template example
// const template = document.getElementById('template')

// const myNewTemplate = template.content.cloneNode(true)
// myNewTemplate.querySelector('h2').textContent = 'EDteam'
// myNewTemplate.querySelector('p').textContent = 'Tu futuro te esta esperando'

// document.getElementById('content').appendChild(myNewTemplate)

/// CSSOM equivalente al DOM pero para CSS
const title = document.querySelector('h1')
const description = document.querySelector('p')
const mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)')
console.log(mediumBp.matches)

// const changeColor = () => {
//   if(mediumBp.matches){
//     document.body.style.background = 'red'
//   } else {
//     document.body.style.background = 'yellow'
//   }
// }
// addEventListener('resize', changeColor)
// addEventListener('DOMContentLoaded', changeColor)



// title.style.backgroundColor = 'yellow'

// if(window.innerWidth > 640){ // evaluando breakpoint 
//   document.body.style.background = "yellow"
// }

///getComputedStyle example
console.log(getComputedStyle(title).fontSize)

/// getBoundingClientReact

