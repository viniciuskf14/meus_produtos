import axios from 'axios';

export const api = axios.create({
baseURL: 'https://chronos.compraqui.app/swagger/v1/swagger.json'

})