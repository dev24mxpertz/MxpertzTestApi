var express = require("express");
var router = express.Router();
const {
  getAllSciencefiction,
  getSciencefictionById,
} = require("../controllers/indexControllers");


// ----------------------------------------------------------------------------- Sciencefiction @api

router.get("/api/sciencefiction", getAllSciencefiction);

router.get("/api/sciencefiction/:id", getSciencefictionById);


module.exports = router;
