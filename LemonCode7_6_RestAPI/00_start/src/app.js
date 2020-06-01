import {
    addCarRows,
    retrieveCarId,
    populateEditCarForm,
    retrieveCarForm,
    cleanTable,
} from './uiHelpers';
import * as MockAPI from './API/carsApi.double';
import * as FetchAPI from './API/carsApi.fetch';
import * as AxiosAPI from './API/carsApi.axios';
import * as httprequestAPI from './API/carsApi.XMLHttpRequest';
import * as GraphqlAPI from './API/carsApi.graphql';
import { login } from './API/login.service';
import { httpClientService } from './API/carsAPI';

let api = MockAPI;

const alert = (() => {
    const alertContainer = document.getElementById('alert-container');
    const alertMessage = document.getElementById('alert-message');

    return {
        show: (message) => {
            alertMessage.textContent = message;
            alertContainer.style.display ="block";
        },
        close: () => {
            alertContainer.style.display ="none";
            alertMessage.textContent = "";
        }
    }
})();

const errorHandler = (error) => alert.show(error);

const eventHandlerGetAllCars = (event) => {
    event.stopPropagation();
    alert.close();
    cleanTable('cars-table');
    api.getAllCars(
        (cars) => addCarRows(cars, 'cars-table'),
        errorHandler
    );
};

const evenHandlerGetCarById = (event) => {
    event.stopPropagation();
    alert.close();
    const carId = retrieveCarId();
    api.getCarById(carId)(
        (r) => populateEditCarForm(r),
        errorHandler
    );
};

const eventHandlerAddCar = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    alert.close();
    const car = retrieveCarForm();
    const result = await api.addCar(car);
    cleanTable('cars-table');
    api.getAllCars(
        (cars) => addCarRows(cars, 'cars-table'),
        errorHandler
    );
};

const eventSelectAPIHandler = (event, selectApi, titleSource) => {
    event.stopPropagation();
    alert.close();
    api = selectApi;
    document.getElementById("source").textContent = titleSource;
}

const readCredentials = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    return {
        username,
        password
    };
};

document.addEventListener('DOMContentLoaded', () => {

    const buttonSetMock = document.getElementById('mock');
    buttonSetMock.addEventListener('click',
        (event) => eventSelectAPIHandler(event, MockAPI, "Mocked data")
    )

    const buttonSetFetch = document.getElementById('fetch');
    buttonSetFetch.addEventListener('click',
        (event) => eventSelectAPIHandler(event, FetchAPI, "Fetch")
    )
    
    const buttonSetAxios = document.getElementById('axios');
    buttonSetAxios.addEventListener('click',
        (event) => eventSelectAPIHandler(event, AxiosAPI, "Axios")
    )

    const buttonSetHttpRequest = document.getElementById('XMLHttpRequest');
    buttonSetHttpRequest.addEventListener('click',
        (event) => eventSelectAPIHandler(event, httprequestAPI, "XMLHttpRequest")
    )

    const buttonSetGraphql = document.getElementById('graphql');
    buttonSetGraphql.addEventListener('click',
        (event) => eventSelectAPIHandler(event, GraphqlAPI, "Graphql")
    )

    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click',
        (event) => eventHandlerGetAllCars(event)
    );

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click',
        (event) => evenHandlerGetCarById(event)
    );

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click',
        (event) => eventHandlerAddCar(event)
    );

    const buttonAlertClose = document.getElementById('alert-close');
    buttonAlertClose.addEventListener('click',
        (event) => alert.close()
    );

    document.getElementById('login').addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        alert.close();
        const credentials = readCredentials();
        login(credentials)
            .then((data) => {
                console.log(data);
                const { access_token } = data;
                httpClientService.setAccessToken(access_token);
                document.getElementById('login-container').style.display = "none";
                document.getElementById('app-container').style.display = "block";
            })
            .catch(errorHandler);
    });
});