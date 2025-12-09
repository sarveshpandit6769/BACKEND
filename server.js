require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const githubData = {
    "name": 'John Doe',
    "username": 'johndoe',
    "company": null,
    "id": 11613311,
    "followers": 128,
    "following": 54,
    "location": 'India',
    "bio": 'Software developer and open source enthusiast.',
    "hireable": null,
    "email": null,
    "twitter username": "johndoe_dev@twitter",
    "created at": '2024-05-20',
    "updated at": '2025-12-15',
    "blog": "https://youtu.be/7fjOw8ApZ1I?si=1_2ZBG4huPJetDUq"
}

app.get('/youtube', (req, res) => {
    res.send('Welcome to Youtube')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1><form><input type="text" placeholder="Username"/><br/><input type="password" placeholder="Password"/><br/><button type="submit">Login</button></form>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
