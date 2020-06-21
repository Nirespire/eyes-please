export {}

import { RepoConfig } from "../types/types"

import { fetchWatchedRepos } from "../store/store"

export function getWatchedRepoConfig(): RepoConfig[] {
    return fetchWatchedRepos().data
}

// export async function addWatchedRepoConfig() {
//     return
// }
