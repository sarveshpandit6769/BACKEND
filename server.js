require('dotenv').config()
const express = require('express')

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
    res.send('Welcome to Youtube')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1><form><input type="text" placeholder="Username"/><br/><input type="password" placeholder="Password"/><br/><button type="submit">Login</button></form>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
