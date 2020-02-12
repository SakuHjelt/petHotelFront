const url = '/api/v1/locations';
const firstPageUrl = '?limit=5,select=title,costAmount,costType,address,createdAt&sort';
const searchUrl = '?select=title,costAmount,costType,address,animalTypes,createdAt&sort';

export const fetchAllData = () => {
    return fetch(url)
        .then(resp => resp.json())
}

export const fetchFrontPageData = () => {
    return fetch(`${url}/${firstPageUrl}`)
        .then(response => response.json());
}

export const fetchSearchData = (formInputData) => {
    return fetch(`${url}${searchUrl}${formInputData}`)
        .then(response => response.json())
}