
import { httpClientService } from './carsAPI';

const queryAllCars = `
   query {
     cars {
       car_id
       name
       brand
       year_release
     }
   }
`;

const queryCarById = (id) => `
   query {
     car (car_id: ${id}){
       car_id
       name
       brand
       year_release
     }
   }
`;

const queryNewCar = ({name, brand, year_release}) => `
  mutation new {
    newCar(newCar: { 
      name:  "${name}"
      brand: "${brand}"
      year_release: "${year_release}"
    }) {
      car_id
    }  
  }
`;

export const getAllCars = (showCars, errorCatch) => {

  httpClientService.getGraphQLClient().request(queryAllCars)
    .then((result) => showCars(result.cars))
    .catch((error) => errorCatch(error));
}

export const getCarById = (id) => (showCar, errorHandler) => {
  httpClientService.getGraphQLClient().request(queryCarById(id))
    .then((result) => showCar(result.car))
    .catch((error) => errorHandler(error));
}

export const addCar = (car) => httpClientService.getGraphQLClient().request(queryNewCar(car));
