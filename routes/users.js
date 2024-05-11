// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const { checkAuth } = require("../middlewares/auth");
const {findAllUsers, createUser, updateUser, findUserById, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserUpdated, sendUserById, sendUserDeleted, sendMe} = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated,
);
  usersRouter.get("/users/:id", findUserById, sendUserById);
  usersRouter.get("/me", checkAuth, sendMe); 
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  ); 
  usersRouter.delete(
  "/users/:id",
  checkAuth,
  deleteUser,
  sendUserDeleted);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;