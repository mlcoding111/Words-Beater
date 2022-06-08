const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Users List")
})

router
    .route("/:id")
    .get((req, res) => {
        let userId = req.params.id
        res.send(`Get user with id ${userId}`)
    })
    .put(("/:id", (req, res) => {
        let userId = req.params.id
        res.send(`Update user with id ${userId}`)
    }))
    .delete(("/:id", (req, res) => {
        let userId = req.params.id
        res.send(`Delete user with id ${userId}`)
    }))



module.exports = router