import axios from 'axios';


export function setAuthToken(token?: any) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        return;
    }
    delete axios.defaults.headers.common['Authorization'];
}

export function isEmpty(value: any) {
    return (
        value === undefined || value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0));
}

