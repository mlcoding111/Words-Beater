const express = require('express')
const app = express()
const path = require("path");
const helmet = require('helmet')

// Middleware
app.use(helmet())
app.use(logger)
app.use(express.static("public"));

const userRouter = require("./routes/users")

app.use('/users', userRouter);


function logger(req, res, next){
    // Get url every time page load
    console.log(req.originalUrl)
    // then continue to the next code..
    next()
}

app.listen(3000)



// We can use middleware for a single request, for example..
// app.get("/", logger, (req,res) => {
//     res.send("Logger")
// })
// We can also call it on top of a route and every routes will call it
