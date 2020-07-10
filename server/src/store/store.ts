export { }

import { Config, RepoConfig } from "../types/types"
import monk from 'monk'

const db = monk('localhost/elevator')
const configCollection = db.get('config')
const ROOT_CONFIG_ID = 'rootConfig'

import stores from './store.json'

const store: Config = stores

function seedData(): void {
    configCollection.drop().then(() => {
        configCollection.insert(stores)
    })
}

seedData()

export function fetchConfig(): Config {
    return configCollection.findOne({ id: ROOT_CONFIG_ID }) as unknown as Config
}

export function fetchWatchedRepos(): RepoConfig[] {
    return fetchConfig().repos
}

export function addWatchedRepo(newRepo: RepoConfig) {
    return configCollection.findOneAndUpdate({ id: ROOT_CONFIG_ID }, { $push: { repos: newRepo } }) as unknown as Config
}
