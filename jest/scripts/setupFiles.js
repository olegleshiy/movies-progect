// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMessage = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);
const errorMeta = 'Some meta information';

const movies = [
    {
        hash: 'df3536g',
        title: '2001: A Space Odyssey',
        release: 1968,
        format: 'DVD',
        stars: 'Keir Dullea, Gary Lockwood, William Sylvester, Douglas Rain',
    },
    {
        hash: 'ff3536g',
        title: 'Harvey',
        release: 1950,
        format: 'DVD',
        stars: 'James Stewart, Josephine Hull, Peggy Dow, Charles Drake',
    },
    {
        hash: '9f3536g',
        title: 'Knocked Up',
        release: 2007,
        format: 'Blu-Ray',
        stars: 'Seth Rogen, Katherine Heigl, Paul Rudd, Leslie Mann',
    },
];

const movie = {
    hash: 'ff3536g',
    title: 'Harvey',
    release: 1950,
    format: 'DVD',
    stars: 'James Stewart, Josephine Hull, Peggy Dow, Charles Drake',
};

const movieHash = 'ff3536g';

const year = new Date().getFullYear();

const url = 'https://www.url.com';

global.__ = {
    errorMessage,
    successMessage,
    token,
    error,
    errorMeta,
    movie,
    movies,
    url,
    year,
    movieHash
};
global.fetch = fetch;
//global.localStorage = new LocalStorage();
