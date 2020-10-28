// Instruments
const { MovieModel } = require('../models');

class Movies {
    constructor(data) {
        this.models = {
            movies: new MovieModel(data),
        };
    }

    async create() {
        const data = await this.models.movies.create();

        return data;
    }

    async getAll() {
        const data = await this.models.movies.getAll();

        return data;
    }

    async getByHash() {
        const data = await this.models.movies.getByHash();

        return data;
    }

    async updateByHash() {
        const data = await this.models.movies.updateByHash();

        return data;
    }

    async removeByHash() {
        const data = await this.models.movies.removeByHash();

        return data;
    }
}

module.exports = { Movies };
