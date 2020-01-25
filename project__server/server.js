const express = require('express')
const app = express()
const cors = require('cors')
// const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({ extended: true })
// var jsonParser = bodyParser.json()
const port = 3000
app.use(cors())
const server = app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
const io = require('socket.io').listen(server)

// app.post('/', jsonParser, (req, res) => {
//     console.log(req.body.userName)
//     res.send(req.body.userName)
// })
io.on('connection', (socket) => {
    socket.on('ENTER_TO_CHAT', (data) => {
        console.log(data.userName)
        socket.broadcast.emit('CONNECT', data.userName)
    })
})
