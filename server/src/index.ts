import express from 'express'
import dotenv from 'dotenv'
import { getPullRequests } from "./github/github"
import { getConfig } from "./config/config"
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get('/prs', async (req, res) => {
    // tslint:disable-next-line:no-console
    console.log("/prs")
    res.send(await getPullRequests())
})

app.get('/config', async(req, res) => {
    // tslint:disable-next-line:no-console
    console.log("GET /config")
    res.send(await getConfig())
})


app.post('/add-repo', async(req, res) => {
    // tslint:disable-next-line:no-console
    console.log("POST /add-repo ", req.body)

})

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Eyes Please server listening on port: ${port}`))


