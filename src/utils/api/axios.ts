import axios from 'axios';

const baseURL: string = 'https://simple-contact-crud.herokuapp.com/';
const initAxios: Function = axios.create({ baseURL });

export default initAxios;
