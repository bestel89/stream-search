import sendRequest from "./send-request"
const BASE_URL = '/api/watchlist-items'


export async function addWatchListItem(imdbId) {
    return sendRequest(`${BASE_URL}/add/${imdbId}`, 'POST')
}

export async function removeWatchListItem(imdbId) {
    return sendRequest(`${BASE_URL}/remove/${imdbId}`, 'POST')
}

