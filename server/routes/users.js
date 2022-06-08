const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Users List")
})

router.get("/:id", (req, res) => {
    let userId = req.params.id
    res.send(`Get user with id ${userId}`)
})

router.put("/:id", (req, res) => {
    let userId = req.params.id
    res.send(`Update user with id ${userId}`)
})


router.delete("/:id", (req, res) => {
    let userId = req.params.id
    res.send(`Delete user with id ${userId}`)
})



module.exports = router