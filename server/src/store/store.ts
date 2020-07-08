export {}

import { Config, RepoConfig } from "../types/types"

import stores from './store.json'

const store:Config = stores

export function fetchConfig(): Config {
    return store
}

export function fetchWatchedRepos(): RepoConfig[] {
    return fetchConfig().repos
}
