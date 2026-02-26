const express = require(`express`)
const app = express()
const port = 3000

// attivazione cartella public
app.use(express.static("public"));


// HOME PAGE
app.get("/", (req, res) => {
    res.send("<h1>Home Route webapp completa</h1>")
})


// IMPORTO MIDDLEWARES
const errorsHandler = require(`./middlewares/handleError`);
const notFound = require(`./middlewares/notFoundStatus`)