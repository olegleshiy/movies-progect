// Core
import { object, string, number } from 'yup';

export const moviesAdd = {
    shape: {
        title:    '',
        release: '',
        format:  '',
        stars:   '',
    },
    schema: object().shape({
        title: string()
            .required('Name is required'),
        release: number()
            .required('Release is required'),
        format: string()
            .required('Format is required'),
        stars: string()
            .required('Stars is required'),
    }),
};
