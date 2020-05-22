const express = require('express')
require('dotenv').config()
const { getPullRequests } = require("./github/github")

const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    console.log("/")
    res.send(await getPullRequests())
})

app.listen(port, () => console.log(`Eyes Please server listening on port: ${port}`))

  
