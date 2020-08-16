let webSocket = null

const setText = data => {
  const msg = `<div>${data}</div>`
  chat.insertAdjacentHTML('beforeend', msg)
}
const setMessage = data => {
  const msg = `<div><span>${data.name}</span><span>${data.message}</span></div>`
  chat.insertAdjacentHTML('beforeend', msg)
}


btnConnect.addEventListener('click', e => {
  webSocket = new WebSocket('ws://echo.websocket.org')
  webSocket.onopen = () => setText('CONECTADO')
  webSocket.onclose = () => setText('DESCONECTADO')
  webSocket.onerror = e => setText(e)
  webSocket.onmessage = e => {
    const msg = JSON.parse(e.data)
    setMessage(msg)
  }
})

btnDisconnect.addEventListener('click', e => {
webSocket.close()
})

btnSend.addEventListener('click', e => {
  const msg = {
    name: txtName.value,
    message: txtMsg.value
  }
  webSocket.send(JSON.stringify(msg))
})