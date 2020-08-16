// const axios = require('axios')  preguntar a dixon por esto

const btn = document.getElementById('btn')
const STATUS_OK = 200
const STATUS_CREATED = 201
const STATUS_NOT_FOUND = 404

const hash = 'e8d1da1063bd7e9d963ac46c2316a036'
const apiKey = '07a2e0995998b79442cc1ae51741d667'
const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=20&nameStartsWith=iron%20man`



btn.addEventListener('click', () => {
  loadComics()
})

const loadComics = async () => {
  const response = await axios.get(url)
  switch (response.status) {
    case STATUS_OK:
      draw(response.data.data.results);
      break
    case STATUS_NOT_FOUND:
      console.log('No se encontro información')
      break
  }
}

const draw = data => {
  const container = document.createElement('div')
  data.forEach(comic => {
    const comicHTML = `
    <div>
      <h2>${comic.name}</h2>
      <img src="${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}" alt="${comic.name}">
    </div>`

    container.insertAdjacentHTML('beforeend',comicHTML)
  })
  myContent.appendChild(container)
}