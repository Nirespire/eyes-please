export {}

import _ from 'lodash'

import { RepoConfig, Config } from "../types/types"

import { fetchWatchedRepos, fetchConfig, addWatchedRepo } from "../store/store"

export function getWatchedRepoConfig(): RepoConfig[] {
    return fetchWatchedRepos()
}

export function getConfig(): Config {
    return fetchConfig()
}

export function addWatchedRepoConfig(newRepo: RepoConfig) {
    const repos = fetchWatchedRepos()

    console.log('repos', repos)

    if (_.some(repos, {owner: newRepo.owner, repo: newRepo.repo})){
        console.log("Duplicate repo")
        throw new Error('Repo config already exists')
    } else {
        addWatchedRepo(newRepo)
    }

}
