// Instruments
import { MAIN_URL } from './config';
import axios from 'axios';

export const api = {
    movies: {
        getAll () {
            return axios.get(`${MAIN_URL}`);
        },
        getById (movieId) {
            return axios.get(`${MAIN_URL}/${movieId}`);
        },
        create (data) {
            return axios.post(`${MAIN_URL}`, data,{
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        downloadFile (data) {
            return axios.post(`${MAIN_URL}/upload`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
            })
        },
        update (movieId, movieInfo) {
            return axios.put(`${MAIN_URL}/${movieId}`, movieInfo,{
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        remove (movieId) {
            return axios.delete(`${MAIN_URL}/${movieId}`);
        },
    },
};
