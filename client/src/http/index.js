import axios from 'axios';

export const URL = 'http://localhost:5002'

const api = axios.create({
    withCredentials: true,
    baseURL: URL
})