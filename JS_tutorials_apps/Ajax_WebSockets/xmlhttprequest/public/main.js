const STATUS_OK = 200
const STATUS_CREATED = 201
const STATUS_UNAUTHORIZED = 401 
const STATUS_NOTFOUND = 404
const STATUS_INTERNALSERVERERROR = 500

const c = document.getElementById('myContent')
// const b = document.getElementById('btnLoad')
const b = document.getElementById('btnLoadJSON')
const loading = document.getElementById('loading')

loading.style.display = 'none'

b.addEventListener('click', evt => {
  loading.style.display = 'block'
  const xhr = new XMLHttpRequest()
  // console.log('Objeto creado:', xhr.readyState)

  // xhr.open('GET','/data.html', true)
  xhr.open('GET', '/json', true)
  // console.log('Objeto abierto (open):', xhr.readyState)
  // Que se debe hacer con la data
  xhr.addEventListener('load', e => {
    // console.log(e.target.status)
    // console.log(e.target)
    // c.innerHTML = e.target.responseText
    // console.log('Objeto cargado:', xhr.readyState)
    // console.log(e.target.responseText)
    switch (e.target.status) {
      case STATUS_OK:
        const data = JSON.parse(e.target.responseText)
        draw(data)
        break;
      case STATUS_UNAUTHORIZED:
        c.textContent = 'No estas autorizado para realizar esta accion'
        break;
      case STATUS_NOTFOUND:
        c.textContent = "Hubo un error en el servidor"
        break;
      case STATUS_INTERNALSERVERERROR:
        c.textContent = "No existe informacion..."
        break;

    }


    // console.log(data)
    loading.style.display = 'none'
  })
  // realice la peticion
  xhr.send()
  // console.log('Accion solicitada:', xhr.readyState)
})

const draw = data => {
  c.innerHTML = '' // limpia el contenido del div al que se le quiere injectar
  const f = document.createDocumentFragment()

  data.forEach(n => {
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const datenew = document.createElement('span')

    title.textContent = n.Titulo
    content.textContent = n.Contenido
    datenew.textContent = n.Fecha

    container.appendChild(title)
    container.appendChild(content)
    container.appendChild(datenew)

    f.appendChild(container)

    // c.appendChild(container) se quita porque consume recursos del equipo del cliente
  });

  c.appendChild(f)


}