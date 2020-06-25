import { Config, RepoConfig, GetPullRequestsListResponse } from "../types/types"

export {}
import { getWatchedRepoConfig } from "../config/config"
import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
    baseUrl: "https://api.github.com",
    auth: process.env.GITHUB_TOKEN
})

export async function getPullRequests() {

    const repos:RepoConfig[] = getWatchedRepoConfig()

    const promises = repos.map(async ({owner, repo}) => {
        const { data: pullRequests }:GetPullRequestsListResponse  = await octokit.pulls.list({owner, repo});

        // tslint:disable-next-line no-console
        console.log(`Retrieved ${pullRequests.length} PRs for ${JSON.stringify(repo)}`)

        // tslint:disable variable-name
        const extractedInfo = pullRequests.map( pr => {
            return (({title, number, state, created_at, updated_at, draft, html_url, user}) =>
                ({title, number, state, created_at, updated_at, draft, html_url, user}))(pr)
        })

        return {
            owner,
            repo,
            pullRequests: extractedInfo
        }
    })

    const results = await Promise.all(promises)

    return results
}
