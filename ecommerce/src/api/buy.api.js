import axios from 'axios';


const buyApi = axios.create({
    baseURL: 'http://localhost:8000/blindcatb/api/v1/buys',
})


export const getAllBuys = () => buyApi.get('/');

export const createBuy = () => buyApi.create('/');


