// Core
const dg = require('debug');

// Instruments
const { Movies } = require('../../../controllers');

const debug = dg('router:movies:hash');

const getByHash = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const { moviesHash } = req.params;
        const model = new Movies({ hash: moviesHash });
        const data = await model.getByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateByHash = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const { moviesHash } = req.params;
        const model = new Movies({ hash: moviesHash, payload: req.body });
        const data = await model.updateByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const removeByHash = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const { movieHash } = req.params;
        const model = new Movies({ hash: movieHash });

        const data = await model.removeByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getByHash,
    updateByHash,
    removeByHash,
}
