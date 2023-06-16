import axios from 'axios';

const productApi = axios.create({
    baseURL: 'http://localhost:8000/blindcatb/api/v1/products',
})

export const getAllProducts = () => productApi.get('/');


export const createProduct = (product) => productApi.post('/', product);
