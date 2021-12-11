const mongoose = require('mongoose');
const Joi = require('joi');
const Genre = require('./genre');
const { valid } = require('joi');

const Movie = mongoose.model(
    "Movie",
    new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        genre: Genre.genreSchema,
        numberInStock: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        },
        dailyRentalRate: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        },
    })
);

function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    });

    const validation = schema.validate(movie);
    return validation;
}

exports.Movie = Movie;
exports.validateMovie = validateMovie;