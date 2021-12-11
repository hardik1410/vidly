const { Movie, validateMovie } = require('../models/movie');
const express = require('express');
const { Genre } = require('../models/genre');
const router = express.Router();

router.get("/", async (req, res) => {
    const movies = await Movie.find().sort('title');
    res.send(movies);
});

router.post("/", async (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await  Genre.findById(req.body.genreId);
    let movie = new Movie({ 
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    })

    movie = await movie.save();
    res.send(movie);
});

module.exports = router;