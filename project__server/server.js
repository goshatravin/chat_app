const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({ extended: true })
var jsonParser = bodyParser.json()
const port = 3000
app.use(cors())
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
app.post('/', jsonParser, (req, res) => {
    console.log(req.body.userName)
    res.send(req.body.userName)
})
