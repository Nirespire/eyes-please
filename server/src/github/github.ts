
import { RepoConfig, GetPullRequestsListResponse, GetPullRequestResponse, GetPullRequestReviewsResponse } from "../types/types"

export { }
import { getWatchedRepoConfig } from "../config/config"
import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
    baseUrl: "https://api.github.com",
    auth: process.env.GITHUB_TOKEN
})

export async function getPullRequests() {

    const repos: RepoConfig[] = getWatchedRepoConfig()

    const promises = repos.map(async ({ owner, repo }) => {
        const { data: pullRequests }: GetPullRequestsListResponse = await octokit.pulls.list({ owner, repo });


        // tslint:disable-next-line no-console
        console.log(`Retrieved ${pullRequests.length} PRs for ${JSON.stringify(repo)}`)

        // tslint:disable variable-name
        const extractedInfo = await Promise.all(pullRequests.map(async (pr) => {

            const prResponse: GetPullRequestResponse = await octokit.pulls.get({ owner, repo, pull_number: pr.number })

            const prs =  (({title, number, state, created_at, updated_at, draft, html_url, user, mergeable }) =>
                ({title, number, state, created_at, updated_at, draft, html_url, user, mergeable }))(prResponse.data)

            const reviewsResponse: GetPullRequestReviewsResponse = await octokit.pulls.listReviews({ owner, repo, pull_number: pr.number });

            const reviews = reviewsResponse.data.map( review => {
                return {
                    id: review.id,
                    state: review.state,
                    user: review.user.login,
                    submitted_at: review.submitted_at
                }
            })


            return { ...prs, reviews };
        }))

        return {
            owner,
            repo,
            pullRequests: extractedInfo
        }
    })

    const results = await Promise.all(promises)

    return results
}
