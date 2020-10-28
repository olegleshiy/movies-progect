// Core
const dg = require('debug');
const fs = require('fs');
const path = require('path');

// Instruments
const { Movies } = require('../../controllers');

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

            const pathFile = path.resolve(__dirname, `../../uploads/${ req.file.filename }`);

            const file = fs.readFileSync(pathFile, 'utf8').trim();

            const transform = movie => movie.split('\n').reduce((obj, line) => {
                const [prop, value] = line.split(': ');
                return { ...obj, [prop.trim().replace('Release Year', 'release').toLowerCase()]: value.trim() };
            }, {});

            const arr = file.split('\n\n').map(transform);

            fs.unlink(pathFile, (err) => {
                if (err) throw err;
                debug(`${pathFile} was deleted`);
            });
            const model = new Movies(arr);
            const data = await model.create();

            res.status(201).json({ data });
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
