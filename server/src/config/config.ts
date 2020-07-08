export {}

import { RepoConfig, Config } from "../types/types"

import { fetchWatchedRepos, fetchConfig } from "../store/store"

export function getWatchedRepoConfig(): RepoConfig[] {
    return fetchWatchedRepos()
}

export function getConfig(): Config {
    return fetchConfig()
}

// export async function addWatchedRepoConfig() {
//     return
// }
