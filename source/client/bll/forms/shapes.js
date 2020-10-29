// Core
import { object, string, number } from 'yup';
import { currentYear } from '../../utils/helpers';

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
            .min(1850, 'Year should be more or equals 1850')
            .max(currentYear(), 'The year must not be more than the current year')
            .required('Release is required'),
        format: string()
            .required('Format is required'),
        stars: string()
            .required('Stars is required'),
    }),
};
