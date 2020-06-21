export {}

import { ReposConfig } from "../types/types"

import stores from './store.json'

const store:ReposConfig = stores

export function fetchWatchedRepos(): ReposConfig {
    return store
}