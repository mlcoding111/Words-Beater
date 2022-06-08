const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Users List")
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get user with id ${req.params.id} and name: ${req.user.name}`)
    })
    .put(("/:id", (req, res) => {
        res.send(`Update user with id ${req.params.id}`)
    }))
    .delete(("/:id", (req, res) => {
        res.send(`Delete user with id ${req.params.id}`)
    }))

const users = [{name: "Mic"}, { name: 'Kenny'} ]

// Whenever we get a param {id}, run this function
// Every time we get a {id}, we set the req.user to the user matchin the id, then we can call it anywhere inside users.js
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    // Go to the next piece of middleware (prevent infinite loading)
    next()
})

module.exports = router