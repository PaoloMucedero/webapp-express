function errorsHandler(err, req, res, next) {
    // INDICO CODICE RISPOSTA
    res.status(500)
    // DETTAGLIO RISPOSTA CON ERRORE
    res.json({
        error: err.message,
    });
};







module.exports = errorsHandler;