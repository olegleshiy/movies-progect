const { movies } = require('../odm');

class Movie {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const data = await movies
            .find({})
            .select('-__v -_id -modified');

        return {
            data
        };
    }

    async create() {
        if(Array.isArray(this.data)) {

            return await movies.create(this.data);

        } else {
            const { title, release, format, stars } = this.data;

            //Create a new movie
            return await movies.create({
                title: title,
                release: release,
                format: format,
                stars: stars,
            });
        }
    }

    async getByHash() {
        const { hash } = this.data;
        const data = await movies
            .findOne({ hash: hash })
            .select('-__v -_id -modified');

        if (!data) {
            throw new Error(`can not find document with hash ${ hash }`);
        }
        return data;
    }

    async updateByHash() {
        const { hash, payload } = this.data;

        const data = await movies
            .findOneAndUpdate({ hash }, payload, { new: true });

        if (!data) {
            throw new Error(`can not find document with hash ${ hash }`);
        }

        return data;
    }

    async removeByHash() {
        const { hash } = this.data;
        const data = await movies
            .findOneAndRemove({ hash }).select('name hash');

        if (!data) {
            throw new Error(`can not find document with hash ${ hash }`);
        }

        return data;
    }
}

module.exports = { MovieModel: Movie };
