// creacion de una libreria ajax

const ajax = request => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(request.method, request.url, true)
    xhr.addEventListener('load', evt => {
      resolve(evt.target)
    })
    xhr.send()
  })
}

const setText = data => {
  myContent.textContent = data
}

const showMarvel = async () => {
  /// md5(ts+privateKey+publicKey)
  const hash = 'e8d1da1063bd7e9d963ac46c2316a036'
  const apiKey = '07a2e0995998b79442cc1ae51741d667'
  const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=20&nameStartsWith=iron%20man`
  const request = {
    method: 'GET',
    url: url
  }
  const response = await ajax(request)
  switch (response.status) {
    case 200:
      console.log(JSON.parse(response.responseText))
      draw(JSON.parse(response.responseText).data.results)
      break
    case 400:
      setText('Error de cliente' + response.status)
      break
    default:
      setText('Erro Desconocido ' + response.status)
  }
}

const draw = data  => {
  const fragment = document.createDocumentFragment()
  data.forEach(comic => {
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const image = document.createElement('img')

    title.textContent = comic.name
    image.src = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`
  
    container.appendChild(title)
    container.appendChild(image)
    fragment.appendChild(container)
  })

  myContent.appendChild(fragment)
}

btn.addEventListener('click', () => {showMarvel()})