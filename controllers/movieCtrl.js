// Connetto al DB
const connection = require(`../data/db`);

// CREO ROTTE 

// INDEX
function index(req, res) {
    console.log(`sei sulla rotta index`);
    // TEMPORARY DEBUG
    res.send("sei sulla rotta index")
}

// SHOW
function show(req, res) {
    console.log(`sei sulla rotta show`);
    // TEMPORARY DEBUG
    res.send("sei sulla rotta show")
}

// Esporto le rotte
module.exports = { index, show}