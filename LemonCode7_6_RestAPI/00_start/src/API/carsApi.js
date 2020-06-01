import axios from 'axios';
import { GraphQLClient } from 'graphql-request';

const baseUrl = 'http://localhost:3050';

export const getAllCarsUrl = baseUrl+'/api/cars';
export const getCarByIdUrl = (id) => getAllCarsUrl+`/${id}`;
export const getAddCarUrl = baseUrl+'/api/cars'; 

export const getGraphqlUrl = baseUrl+'/graphql';

export const httpClientService = (() => {
    let accesToken;
    let graphQLClient;

    const setUpRequest = (token) => {
        axios.interceptors.request.use((config) => {
            config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        }, (err) => {
            return Promise.reject(err);
        });
    };

    return {
        setAccessToken: (_accesToken) => {
            accesToken = `Bearer ${_accesToken}`;   // Config Token for fetch and XMLHttpRequest
            setUpRequest(_accesToken);              // Config token for Axios
            graphQLClient = new GraphQLClient(getGraphqlUrl, {
                headers: {
                  authorization: accesToken,
                },
                mode: 'cors',
            });
        },
        getHeaders: {
            get: () => {
                return {
                    'Accept': 'application/json',
                    'Authorization': accesToken
                }
            },
            post: () => {
                return {
                    'Content-Type': 'application/json',                    
                    'Accept': 'application/json',
                    'Authorization': accesToken
                }
            }
        },
        getAccessToken: () => accesToken,
        getGraphQLClient: () => graphQLClient
    }
})();

// export const graphQLClient = new GraphQLClient(getGraphqlUrl);