const fs = require('fs');
const path = require('path');
const dataFile = '/cars.json';

export const getNextAvailableId = (allCars) => {
    const carIds = allCars.map((c) => c.car_id);
    const maxValue = Math.max(...carIds);
    return maxValue + 1;
}

export const getCarData = () => (
    JSON.parse(
        fs.readFileSync(
           path.join(__dirname + dataFile) , 'utf8'
        )
    )
);

export const getCarByIdData = (car_id) => {
    var data = getCarData();
    var matchingCar = data.find(
        (item) => item.car_id === car_id
    );

    if(!matchingCar) {
        matchingCar = null;
    }
    return matchingCar;
}

export const saveCarData = (data) => (
    fs.writeFile(
        path.join(__dirname + dataFile), 
        JSON.stringify(data, null, 4),
        (err) => {
            if (err) {
                console.log(err);
            }
        })
);