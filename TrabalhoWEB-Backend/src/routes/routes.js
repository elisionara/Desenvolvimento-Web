const { request, response } = require("express");
const express = require("express");
const { points } = require("express/lib/application");

const pointsRoutes = express.Router()
const controller = require('../controllers/points-controller');

//Get Unique point
pointsRoutes.get("/points/:id", controller.getUnique);

//Create
pointsRoutes.post("/points", controller.post);

//Read
pointsRoutes.get("/points", controller.get);

//update
pointsRoutes.put("/points/:id", controller.put);

//Delete
pointsRoutes.delete("/points/:id", controller.delete);


module.exports = pointsRoutes;