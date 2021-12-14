import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://61b09a5b3c954f001722a4e4.mockapi.io/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
})