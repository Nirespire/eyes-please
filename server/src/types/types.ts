import {
    GetResponseTypeFromEndpointMethod
} from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export interface RepoConfig {
    owner: string,
    repo: string
}

export interface Preferences {
    groupByRepo: boolean,
    hoursToStale: number,
    approvalsToMerge: number,
    showRequestApprovals: boolean,
    ignoreWeekends: boolean
}

export interface Config {
    apiBaseUrl: string,
    preferences: Preferences
    repos: RepoConfig[],
    repoRegexes: string[]

}

export type GetPullRequestsListResponse = GetResponseTypeFromEndpointMethod<
    typeof octokit.pulls.list
>;