import sendRequest from "./send-request"
const BASE_URL = '/api/users'

export async function signUp(userData) {
    console.log('log 3')
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(userCreds) {
    return sendRequest(`${BASE_URL}/login`, 'POST', userCreds)
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}

