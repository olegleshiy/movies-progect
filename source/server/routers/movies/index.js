// Core
const express = require('express');
const fileText = require('../../middleware/file');

// Instruments
const { get, post, postFile } = require('./route');
const { getByHash, updateByHash, removeByHash } = require('./hash');

const router = express.Router();

router.get('/', get);
router.post('/', post);
router.post('/upload', fileText.single('file'), postFile);

router.get('/:movieHash', getByHash);
router.put('/:movieHash', updateByHash);
router.delete('/:movieHash', removeByHash);

module.exports = { movies: router };
