const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({mensagem: 'Hello, World!'})
})

app.listen(8080, () => {
    let data = new Date()

    console.log('Servidor Online e iniciado em: ' + data)
})
