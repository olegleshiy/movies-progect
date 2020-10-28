const { v4: uuidv4 } = require('uuid');
const { Schema, model } = require('mongoose');

const optionsSchema = {
    timestamps: { createdAt: 'created', updatedAt: 'modified' },
    collection: 'movies',
};

const moviesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        enum: ['VHS', 'DVD', 'Blu-Ray'],
        required: true,
    },
    stars: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        unique: true,
        default: () => uuidv4(),
    },
}, optionsSchema);

module.exports = {
    movies: model('Movies', moviesSchema),
};
