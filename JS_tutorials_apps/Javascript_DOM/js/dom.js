const title = document.getElementById('title'),
  title2 = document.querySelector('h1'),
  listItems = document.querySelectorAll('ul li'),
  secondItem = document.querySelector('ul li:nth-child(2)'),
  list = document.getElementById('list'),
  elementList = document.getElementsByTagName('li'),
  nodeList = document.querySelectorAll('li'),
  // nodeLists = [...document.querySelectorAll('li')]  // convertir un nodelist en array
  // nodeLists = Array.from(document.querySelectorAll('li')) // convertir un nodelit en array
  nodeLists = (document.querySelectorAll('li')),
  profesor = document.createElement('p'),
  profesorContainer = document.getElementById('teacher')


  profesor.textContent = 'Roger Acosta'
  profesor.classList.add('teacher')
  // profesor.id = 'teacher'
  // document.body.appendChild(profesor)
  if(profesorContainer && profesorContainer.querySelector('span')){
    profesorContainer.querySelector('span').appendChild(profesor)
  }

for (let el of nodeLists) {
  if (el.textContent.trim().toUpperCase() === 'OBJECT') {
    el.remove()
  }
}
if (title) {
  title.style.background = 'yellow';
}
// title2.setAttribute('id', 'title2')
// title2.classList.add('main-title')
// title.textContent = 'Hola Mama, estoy en clases'
// title.innerHTML = `Hola mama, <em> Estoy en Clase</em>`
// title2.id = 'title2' 
// nodeLists.map(el => el.style.background = 'green')
// nodeLists.map( el => {
//   if(el.textContent.trim().toUpperCase() === 'OBJECT'){
//     el.remove()
//   }
// })
// console.log(title.textContent)
// console.log(title.innerHTML)
// console.log(title.outerHTML)
// console.log(title2.classList)
// console.log(listItems)
// console.log(secondItem)
// console.log(list.querySelector('li:last-child'))
// console.log(elementList)
// console.log(nodeList)
// console.log(title.getAttribute('id'))