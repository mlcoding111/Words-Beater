const express = require('express')
const app = express()
const path = require("path");
const helmet = require('helmet')

app.use(helmet())

// add middleware
app.use(express.static("public"));

const userRouter = require("./routes/users")

app.use('/users', userRouter);


app.listen(3000)