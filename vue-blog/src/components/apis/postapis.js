import axios from 'axios';

const instacne = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:10000,
})

export default instacne
