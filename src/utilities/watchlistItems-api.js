import sendRequest from "./send-request"
const BASE_URL = '/api/watchlist-items'


export async function addWatchListItem(imdbId) {
    return sendRequest(`${BASE_URL}/add/${imdbId}`, 'POST')
}


export async function removeWatchListItem(imdbId) {
    return sendRequest(`${BASE_URL}/remove/${imdbId}`, 'POST')
}


export async function getStreamingStatus(streamingServices, profile) {
    const userServices = await profile.services
    let status
    for (const service of streamingServices) {
        let { subscriptionOption, addOnOption } = service
        if (subscriptionOption === undefined) {
            subscriptionOption = false
        }
        if (addOnOption === undefined) {
            addOnOption = false
        }
        if (subscriptionOption || addOnOption) {
            if (userServices.includes(Object.keys(service)[0])) {
                status = true
            }
        }
    }
    return status
}


export function setTooltipContent(service) {
    const { subscriptionOption, rentOption, buyOption, addOnOption } = service
    let tooltipContent = ''
        if (subscriptionOption) {
        tooltipContent = 'SUBSCRIPTION/FREE'
        } else if (rentOption && buyOption) {
        tooltipContent = 'RENT and BUY'
        } else if (rentOption) {
        tooltipContent = 'RENT'
        } else if (buyOption) {
        tooltipContent = 'BUY'
        } else if (addOnOption) {
        tooltipContent = 'CHECK ADD-ON'
    }
    return tooltipContent
}


export function reorganiseStreamingServices(services) {
    let servicesArrObjs = []
        Object.entries(services).forEach(key => {
            let newObj = {
                [key[0]]: key[1]
            }
            Object.values(newObj).forEach(ssOptionsArr => {
                Object.values(ssOptionsArr).forEach(option => {
                    if(option.type === 'rent') {
                        newObj.rentOption = true
                    } else if (option.type === 'subscription') {
                        newObj.subscriptionOption = true
                    } else if (option.type === 'buy') {
                        newObj.buyOption = true
                    } else if (option.type === 'free') {
                        newObj.subscriptionOption = true
                    } else if (option.type === 'addon') {
                        newObj.addOnOption = true
                    }
                })
            })
            servicesArrObjs.push(newObj)
        });
    return servicesArrObjs
}