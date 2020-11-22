import axios from 'axios';

const instance = axios.create({
    baseURL: '',
});

instance.defaults.headers.get['Accepts'] = 'application/json';

export const ServerMain = instance;
