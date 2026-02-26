// Connetto al DB
const connection = require(`../data/db`);

// CREO ROTTE 

// INDEX
function index(req, res, next) {
    // TEMPORARY DEBUG
    //console.log(`sei sulla rotta index`);
    //res.send("sei sulla rotta index")
    // PREPARO LA QUERY
    const sql = "SELECT * FROM movies"
    // ESEGUO LA QUERY
    connection.query(sql, (err, results) => {

        if (err) return next(err); // All'errore utilizza l'errore del middlewares handleError

        res.json(results);

    });

}


// SHOW
function show(req, res, next) {
    // TEMPORARY DEBUG
    //console.log(`sei sulla rotta show`);
    //res.send("sei sulla rotta show")

    // RENDO DISPONIBILE ID con param dinamico
    const {id} = req.params;
    // PREPARO LA QUERY
    const movieSql = "SELECT * FROM movies WHERE id = ?"
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`
    // CHIAMATA PRINCIPALE PER LIBRO
    connection.query(movieSql, [id], (err, results) => {
        if (err) return next(err); // All'errore utilizza l'errore del middlewares handleError
        if (results.length === 0) return res.status(404).json({ error: `movie not found`});

        // Uso una variabile per salvare il singolo film
        const movie = results[0];

        // CHIMATA SECONDARIA PER REVIEW
        connection.query(reviewsSql, [id], (err, reviewResults) => {
            if (err) return next(err); // All'errore utilizza l'errore del middlewares handleError
        
        // Uso una variabile per salvare il singolo film
        const movie = results[0];
        // Uso una variabile per salvare le reviews
        const review = reviewResults;
        // Aggiungo prop reviews all'elemento book
        movie.reviews = reviewsArr;
            // ritorno .JSON
            res.json(movie);
        });
    });


}

// Esporto le rotte
module.exports = { index, show }