const gameSchema = require("../models/game");

const createGame = async (req, res) => {
  const { body } = req;
  const createdGame = gameSchema(body);
  try {
    const savedGame = await createdGame.save();
    res.json(savedGame);
  } catch (e) {
    console.error(e);
    res.json({
      message: "Ocurrió un error al crear la partida actual",
    });
  }
};

const getGames = async (req, res) => {
  try {
    const games = await gameSchema.find();
    res.json(games);
  } catch (e) {
    console.error(e);
    res.json({
      message: "Ocurrió un error al obtener la lista de partidas",
    });
  }
};

module.exports = {
  createGame,
  getGames,
};
