import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Car {
    car_id: Int!
    brand: String!
    name: String!
    year_release: String!
  }

  type Query {
    cars: [Car!]!
    car(car_id: Int!): Car!
  }

  input NewCar {
    brand: String!
    name: String!
    year_release: String
  }
  
  type Mutation {
    newCar(newCar: NewCar!): Car!
  }
  
`;
