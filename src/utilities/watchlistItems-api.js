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
    let status = true;
    for (const service of streamingServices) {
        const { subscriptionOption } = service
        if (!subscriptionOption) {
            status = false
        } else if (subscriptionOption) {
            if (userServices.includes(Object.keys(service)[0])) {
            status = true
        }
      }
    }
    return status
}

export function setTooltipContent(service) {
    const { subscriptionOption, rentOption, buyOption } = service
    let tooltipContent = ''
        if (subscriptionOption) {
        tooltipContent = 'SUBSCRIPTION'
        } else if (rentOption && buyOption) {
        tooltipContent = 'RENT and BUY'
        } else if (rentOption) {
        tooltipContent = 'RENT'
        } else if (buyOption) {
        tooltipContent = 'BUY'
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
                    }
                })
            })
            servicesArrObjs.push(newObj)
        });
    return servicesArrObjs
}