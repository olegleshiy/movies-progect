// Core
const dg = require('debug');
const fs = require('fs');
const path = require('path');

// Instruments
const { Movies } = require('../../controllers');
const { removedFile, removeDuplicateOfString, isFindEqualsObject } = require('../../helpers/funtions');

const debug = dg('router:movies');

const get = async (req, res) => {
    debug(`${ req.method } - ${ req.originalUrl }`);

    try {
        const model = new Movies();
        const data = await model.getAll();

        res.status(200).json({ ...data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const post = async (req, res) => {
    debug(`${ req.method } - ${ req.originalUrl }`);
    try {
        const model = new Movies(req.body);
        const data = await model.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const postFile = async (req, res) => {
    debug(`${ req.method } - ${ req.originalUrl }`);

    try {
        if (req.file) {
            const modelCheck = new Movies();
            const { data } = await modelCheck.getAll();

            const pathFile = path.resolve(__dirname, `../../uploads/${ req.file.filename }`);
            const file = fs.readFileSync(pathFile, 'utf8').trim();
            const currentYear = new Date().getFullYear();

            const transform = movie => movie.split('\n').reduce((obj, line) => {
                const [prop, value] = line.split(': ');
                if(!prop || !value) {
                    removedFile(pathFile);
                }
                return {
                    ...obj,
                    [prop.trim().replace('Release Year', 'release').toLowerCase()]: value
                };
            }, {});

            const arr = file
                .split('\n\n')
                .map(transform);

            const filteredObjectByDate = arr
                .filter(el => el.release > 1849 && el.release <= currentYear)
                .map(el => {el.stars = removeDuplicateOfString(el.stars); return el;});

            removedFile(pathFile);

            const filteredObjectByIsEquals = filteredObjectByDate
                .filter(obj => !isFindEqualsObject(data, obj, 'format'));

            const model = new Movies(filteredObjectByIsEquals);
            const result = await model.create();

            res.status(201).json({ data: result });
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    get,
    post,
    postFile
};
