let webSocket = null,
  theChart = null
const dataChart = [5, 15, 12]


const setSystemMessage = data => {
  systemMessage.textContent = data
}

const login = async () => {
  const user = {
    name: usrName.value,
    password: password.value
  }
  const header = new Headers()
  header.append('content-type', 'application/json')
  const options = {
    method: 'POST',
    headers: header,
    body: JSON.stringify(user)
  }

  let data = {}
  const reponse = await fetch('/login', options)
  switch (reponse.status) {
    case 200:
      // procesar el json de respuesta
      data = await reponse.json()
      // console.log(data)
      connectWS(data)
      loadChart()
      break
    case 401:
      setSystemMessage('Usuario o Contraseña no valido')
      break
    default:
      setSystemMessage('Estado no esperado:' + response.status)
      break
  }
}

btnLogin.addEventListener('click', e => {
  e.preventDefault()
  login()
})

const connectWS = data => {
  webSocket = new WebSocket(`ws://localhost:9999/ws?uname=${usrName.value}&token=${data.token}`)
  webSocket.onopen = e => {
    setSystemMessage('Conectado al webSocket correctamente')
  }
  webSocket.onerror = e => {
    setSystemMessage(e)
  }
  webSocket.onmessage = e => {
    const data = JSON.parse(e.data)
    switch (data.type) {
      case 'message':
        myContent.insertAdjacentHTML('beforeend', `<div>De: ${data.data_response.name}, Mensaje: ${data.data_response.message}</div>`)
        break
      case 'sale':
        dataChart[data.data_sale.product] += data.data_sale.quantity
        theChart.update()
        break
      case 'pong':
        console.log('Sigo Vivo')
        break
      default:
        setSystemMessage('Recibi un tipo de mensaje desconocido')
    }
  }
  setInterval(() => {
    webSocket.send(JSON.stringify({type: 'ping'}))
  },60000)
}

btnSendMessage.addEventListener('click', e => {
  e.preventDefault()
  // TODO validar que el mensaje no este vacio
  const data = {
    type: 'message',
    message: txtmsg.value
  }
  webSocket.send(JSON.stringify(data))
})

btnSale.addEventListener('click', e => {
  e.preventDefault()
  // todo validar que la cantidad sea mayor a cero
  const data = {
    type: 'sale',
    product: parseInt(product.value, 10),
    quantity: parseInt(quantity.value, 10)

  }
  webSocket.send(JSON.stringify(data))
})

const loadChart = () => {

  const ctx = document.getElementById('myChart').getContext('2d');
  theChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Zapatos', 'Camisas', 'Billeteras'],
      datasets: [{
        label: 'Sales',
        data: dataChart,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}