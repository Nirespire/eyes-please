const { getWatchedRepos } = require("../store/store")
const { Octokit } = require("@octokit/rest")

const octokit = new Octokit({
    baseUrl: "https://api.github.com"
})

async function getPullRequests() {
    getWatchedRepos().map(mapRepos)
}

const mapRepos = async (repo) => {
    const { data: pullRequest }  = await octokit.pulls.list(repo);
    console.log(pullRequest)
}

module.exports = { getPullRequests }