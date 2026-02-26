// QUESTO FILE GESTISCE TUTTE LE ROTTE DELLA MIA APP
const express = require("express");
const router = express.Router();

// IMPORTO IL CONTROLLER CHE OPERA SUL DB
const movieCtrl = require(`../controllers/movieCtrl`);

// DEFINISCO LE ROTTE

// INDEX → lista di tutti i film
router.get("/", movieCtrl.index);

// SHOW → dettaglio di un singolo post
router.get("/:id", movieCtrl.show);

module.exports = router;