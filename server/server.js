const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet())

app.get('/', (req, res) => {
    console.log("Server running")
    res.send("Success")
})

app.listen(3000)