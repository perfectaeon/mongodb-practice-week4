// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const {findAllUsers, createUser, updateUser, findUserById, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserUpdated, sendUserById, sendUserDeleted} = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);
  usersRouter.get("/users/:id", findUserById, sendUserById);
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
  ); 
  usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;