const url = '/api/v1/locations';
const firstPageUrl = '?limit=5,select=title,costAmount,costType,address,createdAt&sort';

export const fetchAllData = () => {
    return fetch(url)
        .then(resp => resp.json())
}

export const fetchFrontPageData = () => {
    return fetch(`${url}/${firstPageUrl}`)
        .then(response => response.json());
}