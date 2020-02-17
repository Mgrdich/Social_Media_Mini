import axios from 'axios';
import {keyValue} from "../interfaces/General";


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
        (typeof value === 'string' && value.trim().length === 0)
    );
}

export function sanitizeFormValues(obj: keyValue): keyValue {
    return Object.keys(obj).reduce(function (acc: any, curr: string) {
        let obj1: any = {...acc};
        if (obj[curr]) {
            obj1[curr] = obj[curr];
        }
        return obj1;
    }, {} as any);
}

