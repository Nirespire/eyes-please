const store = require('./store.json')

function getWatchedRepos() {
    return store.data
}

module.exports = { getWatchedRepos }