function notFound(req, res, next) {
    // INDICO CODICE RISPOSTA 
    res.status(404)
    // DETTAGLIO RISPOSTA CON ERRORE
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};





module.exports = notFound;