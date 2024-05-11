// Файл routes/games.js

const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth");
const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIsGameExists, checkIfCategoriesAvaliable, checkIfUsersAreSafe} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
); 
gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  checkAuth,
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
); 
module.exports = gamesRouter;