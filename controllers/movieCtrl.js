// Connetto al DB
const connection = require(`../data/db`);

// CREO ROTTE 

// INDEX
function index(req, res) {
    // TEMPORARY DEBUG
    //console.log(`sei sulla rotta index`);
    //res.send("sei sulla rotta index")
    // PREPARO LA QUERY
    const sql = "SELECT * FROM movies"
    // ESEGUO LA QUERY
    connection.query(sql, (err, results) => {

        if (err) {
            console.error("Errore database:", err);
            return res.status(500).json({
                error: "Errore del server"
            });
        }

        res.json(results);

    });

}


// SHOW
function show(req, res) {
    // TEMPORARY DEBUG
    console.log(`sei sulla rotta show`);
    res.send("sei sulla rotta show")
}

// Esporto le rotte
module.exports = { index, show}