import {
    GetResponseTypeFromEndpointMethod
} from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export interface RepoConfig {
    owner: string,
    repo: string
}

export interface ReposConfig {
    data: RepoConfig[]
}

export type GetPullRequestsListResponse = GetResponseTypeFromEndpointMethod<
    typeof octokit.pulls.list
>;