const {initializeDatabase} = require("./db/db.connect");
 const Movie = require("./models/movie.models");

initializeDatabase();

        const newMovie = {
                title: "New Movie",
                releaseYear: 2023,
                genre: ["Drama"],
                director: "Aditya Roy Chopra",
                actors: ["Actor1","Actor2"],
                language: "Hindi",
                country: "India",
                rating: 6.1,
                plot: "A young Man and Young Woman fall in love on a trip",
                awards: "IFA Filmfare Awards",
                posterUrl: "https://example.com/new-poster1.jpg",
                trailerUrl: "https://example.com/new-trailer1.mp4",

        };

        async function createMovie(newMovie){
            try{
                const movie = new Movie(newMovie);
                const saveMovie = await movie.save();
                console.log(saveMovie,"movie Data")
            }catch(error){
                throw error;
            }
        }
           
// createMovie(newMovie);

//find movie by id and delete it from database

async function deleteMovieById(movieId){
    try{
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        console.log(deletedMovie); 
    }catch(error){
        console.log("Error occured while fetchinf data",error);
    }
}

//deleteMovieById('6a26705d6c24c25e3ecf540f');

//find movie by title and delete it

async function deleteMovieFromDb(movieTitle){
    try{
        const movie = await Movie.findOneAndDelete({title:movieTitle});
        console.log(movie);
    }catch(error){
        console.log("Error while getting details",error);
    }
}

deleteMovieFromDb("PK");