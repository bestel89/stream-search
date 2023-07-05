import { getToken } from "./users-service"

export default async function(url, method='GET', payload = null) {
    //Fetch accepts an options object as the second argument
    //This is used to include a data payload, set headers and specify the method etc.
    const options = { method }
    if (payload) {
        options.headers = {'Content-Type': 'application/json'}
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if (token) {
        //Need to add an authorisation header
        //Use the Logical OR Assignment operator
        options.headers ||= {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    //If res.ok is false then something went wrong
    if (res.ok) return res.json()
    throw new Error('Bad request')
}