
import axios from 'axios';
import { getAllCarsUrl, getCarByIdUrl, getAddCarUrl } from './carsAPI';

export const getAllCars = (showCars, errorCatch) => {
    axios.get(getAllCarsUrl)
        .then((result) => showCars(result.data))
        .catch((error) => errorCatch(error));
}

export const getCarById = (id) => (showCar, errorHandler) => {
    axios.get(getCarByIdUrl(id))
        .then((result) => showCar(result.data))
        .catch((error) => errorHandler(error));
}

export const addCar = (car) => {
    return axios.post(getAddCarUrl, car);
};