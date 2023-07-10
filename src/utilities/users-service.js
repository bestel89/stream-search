// service modules export business / app logic
// such as storing / managing tokens
// service modules often depend upon API modules
// for making AJAX requests to the server

import * as usersAPI from "./users-api"


export async function signUp(userData) {
    // const token = await usersAPI.signUp(userData)
    console.log('log 2')
    return await usersAPI.signUp(userData)
    // localStorage.setItem('token', token)
    // return getUser()
}

export async function login(userCreds) {
    const token = await usersAPI.login(userCreds)
    localStorage.setItem('token', token)
    return getUser()
}

export function logOut() {
    localStorage.removeItem('token')
}

export function getToken() {
    const token = localStorage.getItem('token')
    if (!token) return null
    //Obtain the payload from the token
    const payload = JSON.parse(atob(token.split('.')[1]))
    //A JWT's expiry (exp) is expressed in seconds, not milliseconds
    if (payload.exp * 1000 < Date.now()) {
        //Token has expired
        localStorage.removeItem('token')
        return null
    }
    return token
}

export function checkToken() {
    return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}
