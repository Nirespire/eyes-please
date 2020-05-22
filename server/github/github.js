const { getWatchedRepos } = require("../store/store")
const { Octokit } = require("@octokit/rest")

const octokit = new Octokit({
    baseUrl: "https://api.github.com",
    auth: process.env.GITHUB_TOKEN
})

async function getPullRequests() {
    
    const repos = await getWatchedRepos()

    const promises = repos.map(async repo => {
        const { data: pullRequests }  = await octokit.pulls.list(repo);

        console.log(`Retrieved ${pullRequests.length} PRs for ${JSON.stringify(repo)}`)

        const extractedInfo = pullRequests.map( pr => {
            return (({title, number, state, created_at, updated_at, draft, html_url, user}) => 
                ({title, number, state, created_at, updated_at, draft, html_url, user}))(pr)
        })

        return {
            owner: repo.owner,
            repo: repo.repo,
            pullRequests: extractedInfo
        }
    })

    const results = await Promise.all(promises)

    return results
}

module.exports = { getPullRequests }