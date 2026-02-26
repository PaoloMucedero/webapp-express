const express = require(`express`)
const app = express()
const port = process.env.PORT // così richiamo il dato della porta nascosto nel file invisibile .env

// IMPORTO ROUTER DEI FILM
const movieRouter = require(`./routers/movieRouter`)

// attivazione cartella public
app.use(express.static("public"));


// HOME PAGE
app.get("/api", (req, res) => {
    res.send("<h1>Home Route webapp completa</h1>")
})

// USO LE ROTTE DI movieRouter.js
app.use(`/api/movies`, movieRouter);

// IMPORTO MIDDLEWARES
const errorsHandler = require(`./middlewares/handleError`);
const notFound = require(`./middlewares/notFoundStatus`)
// UTILIZZO DEI MIDDLEWARES
app.use(errorsHandler);
app.use(notFound);



// .listen 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})