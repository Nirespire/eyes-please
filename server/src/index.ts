import express, { Request, Response } from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import { getPullRequests } from "./github/github"
import { getConfig, addWatchedRepoConfig } from "./config/config"
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 3001

app.use(helmet())
app.use(bodyParser.json());
app.use(morgan('tiny'))

app.get('/prs', async (req, res) => {
    res.send(await getPullRequests())
})

app.get('/config', async (req, res) => {
    try {
        res.send(await getConfig())
    } catch (e) {
        res.status(500).send(JSON.stringify(e))
    }
})

app.post('/add-repo', async (req: Request, res: Response) => {
    // try {
        addWatchedRepoConfig(req.body)
        res.send('ok')
    // } catch (e) {
        // res.status(500).send(JSON.stringify(e))
    // }
})

app.listen(port, () => console.log(`Eyes Please server listening on port: ${port}`))


