import {
    GetResponseTypeFromEndpointMethod
} from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export interface RepoConfig {
    owner: string,
    repo: string,
    approvalsToMerge?: number
}

export interface Preferences {
    groupByRepo: boolean,
    hoursToStale: number,
    approvalsToMerge: number,
    showRequestApprovals: boolean,
    ignoreWeekends: boolean
}

export interface Config {
    id: string,
    apiBaseUrl: string,
    preferences: Preferences
    repos: RepoConfig[],
    repoRegexes: string[]
}

export type GetPullRequestsListResponse = GetResponseTypeFromEndpointMethod<
    typeof octokit.pulls.list
>;

export type GetPullRequestResponse = GetResponseTypeFromEndpointMethod<
    typeof octokit.pulls.get
>;

export type GetPullRequestReviewsResponse = GetResponseTypeFromEndpointMethod<
    typeof octokit.pulls.listReviews
>;