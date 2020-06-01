import { getAllCarsUrl, getCarByIdUrl, getAddCarUrl, httpClientService } from './carsAPI';

const requestOptionsFactory = (headers) => (...args) => {
    const [method, mode, body] = [...args];
    return {
        method,
        mode,
        body,
        headers,
    };
};

export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const fetchJson = (request) => fetch(request)
    .then(handleErrors)
    .then((response) => response.json());

export const getAllCars = (showCars, errorCatch) => {
    const h = httpClientService.getHeaders.get();
    console.log(h);
    fetchJson(
        new Request(getAllCarsUrl, requestOptionsFactory(httpClientService.getHeaders.get())('GET', 'cors'))
    )
        .then(showCars)
        .catch(errorCatch);
}

export const getCarById = (id) => (showCar, errorHandler) => {
    fetchJson(
        new Request(getCarByIdUrl(id), requestOptionsFactory(httpClientService.getHeaders.get())('GET', 'cors'))
    )
        .then(showCar)
        .catch(errorHandler);
}

export const addCar = (car) => {
    const body = JSON.stringify(car);
    return fetchJson(
        new Request(
            getAddCarUrl,
            requestOptionsFactory(httpClientService.getHeaders.post())
                (
                    'POST',
                    'cors',
                    body
                )
        )
    )
};