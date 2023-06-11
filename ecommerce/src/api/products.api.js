import axios from 'axios';

export const getAllProducts = () =>{
    return axios.get('http://localhost:8000/blindcatb/api/v1/products')
}