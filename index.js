const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const user = require('./controllers/user')


app.use(bodyParser.json())
app.use(cors())

app.listen(3030, () => {
    console.log('Aplicação em curso')
})

app.route('/')
    .get((req, res) => res.send('raiz do app'))

app.route('/user')
    .get((req, res) => user.list(req, res))