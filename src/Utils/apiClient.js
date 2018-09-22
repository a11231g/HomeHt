import { apiPath, baseApiPath } from '../Config';
const methods = ['get', 'post', 'put', 'patch', 'delete'];

export function formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? `/${path}` : path;
    return path === 'connect/token' ? baseApiPath + adjustedPath : apiPath + adjustedPath;
}

export function checkStatus(response) {
    if (response.status === 201) {
        return response.json();
    }
    if (response.status >= 200 && response.status < 300) {
        if (response._bodyInit) {
            return response.json();
        }
        return response;
    }
    if (response.status === 401) {
        return Promise.reject(response);
    }

    return Promise.reject(response);
}

export function parseJSON(response) {
    if (response && response.headers) {
        return response.headers.get('Content-Type') === 'application/json' ? response.json() : response;
    }
    return response;
}

function fetchCreator(method, url, options = {}) {
    options.method = method;

    return this.request(url, options)
        .then(checkStatus)
        .then(parseJSON);
}

export default class ApiClient {
    constructor() {
        methods.forEach((method) => {
            this[method] = fetchCreator.bind(this, method);
        });
    }

    request(url, { data, ...options } = {}) {
        const fetchOptions = options;
        fetchOptions.headers = fetchOptions.headers || {};

        if (data) {
            if (fetchOptions.type === 'formdata') {
                fetchOptions.body = new FormData();
                for (let key in data) {
                    if (typeof key === 'string' &&
                        data.hasOwnProperty(key) &&
                        typeof data[key] !== 'undefined') {
                        fetchOptions.body.append(key, data[key]);
                    }
                }
            } else if (url === 'connect/token') {
                let formBody = [];
                for (const property in data) {
                    const encodedKey = encodeURIComponent(property);
                    const encodedValue = encodeURIComponent(data[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetchOptions.body = formBody;
                fetchOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
            } else {
                fetchOptions.body = JSON.stringify(data);
                fetchOptions.headers.Accept = 'application/json';
                fetchOptions.headers['Content-Type'] = 'application/json';
            }
        }
        if (this.jwt && this.jwt.access_token) {
            fetchOptions.headers.Authorization = `Bearer ${this.jwt.access_token}`;
        }
        return fetch(formatUrl(url), fetchOptions);
    }
}
