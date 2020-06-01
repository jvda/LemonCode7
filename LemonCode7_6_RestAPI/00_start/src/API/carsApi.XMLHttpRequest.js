import { getAllCarsUrl, getCarByIdUrl, getAddCarUrl, httpClientService } from './carsAPI';

const ajax = (method, url, args) => (
    new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        let uri = url;
        let params;
        // TRIBUTE: https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/
        if (method === 'POST') {
            params = typeof args == 'string' ? args : Object.keys(args).map(
                (k) => (encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            ).join('&');
        }
        client.open(method, uri);
        if (method === 'POST') {
            client.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }        
        client.setRequestHeader('Authorization', httpClientService.getAccessToken());
        
        client.onload = (event) => {
            resolve(event.target.responseText);
        };
        client.onerror = (event) => {
            reject(event.target.statusText);
        };
        if (method === 'POST') {
            client.send(params);
        } else {
            client.send();
        }
    })
);

export const httpClient = {
    'get': (url, args) => ajax('GET', url, args),
    'post': (url, args) => ajax('POST', url, args),
};

export const getAllCars = (showCars, errorCatch) => {
    httpClient.get(getAllCarsUrl)
    .then((result) => showCars(JSON.parse(result)))
    .catch((error) => errorCatch(error));    
}

export const getCarById = (id) => (showCar, errorHandler) => { 
    httpClient.get(getCarByIdUrl(id))
    .then((result) => showCar(JSON.parse(result)))
    .catch((error) => errorHandler(error));
}

export const addCar = (car) => httpClient.post(getAddCarUrl,car);