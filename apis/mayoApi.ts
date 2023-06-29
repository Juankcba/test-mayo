import axios from 'axios';



const mayoApi = axios.create({
    baseURL: 'https://lms.grupo-mayo.com/api'
});


export default mayoApi;