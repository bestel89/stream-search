import sendRequest from "./send-request"
const BASE_URL = '/api/settings'

export const countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Canada', code: 'CA' },
    { name: 'Chile', code: 'CL' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'Greece', code: 'GR' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Japan', code: 'JP' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'North Macedonia', code: 'MK' },
    { name: 'Norway', code: 'NO' },
    { name: 'Panama', code: 'PA' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Singapore', code: 'SG' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'Vietnam', code: 'VN' }
];

export async function updateCountry(userCountry) {
    return sendRequest(`${BASE_URL}/update-country`, 'POST', userCountry)
}

export async function getProfile(userId) {
    return sendRequest(`${BASE_URL}/get-profile/${userId}`)
}