import { getCarData, getCarByIdData, saveCarData, getNextAvailableId } from '../data/data';

export const resolvers = {
  Query: {
    cars: async () => {
      const cars = await getCarData();
      return cars;
    },
    car: async (parent, args) => {
      const car = await getCarByIdData(args.car_id);
      return car;
    },
  },
  Mutation: {
    newCar: async (parent, args) => {
      const allCars = getCarData();
      const nextId = getNextAvailableId(allCars);
      const newCar = {
        car_id: nextId,
        name: args.newCar.name,
        brand: args.newCar.brand,
        year_release: args.newCar.year_release
      };
      console.log(newCar);
      allCars.push(newCar);
      saveCarData(allCars);

      return newCar;
    }
  }
};
