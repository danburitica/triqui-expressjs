const { Router } = require("express");
const { createGame, getGames } = require("../controllers/game.controller");
const router = Router();

router.post("/games", createGame);
router.get("/games", getGames);

module.exports = router;
