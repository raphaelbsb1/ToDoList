const express = require("express");
const tasksControler = require("./controlers/tasksControler");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksControler.getAll);

router.post(
  "/tasks",
  tasksMiddleware.validadeFieldTitle,
  tasksControler.createTask
);

router.delete("/tasks/:id", tasksControler.deleteTask);

router.put(
  "/tasks/:id",
  tasksMiddleware.validadeFieldTitle,
  tasksMiddleware.validadeFieldStatus,
  tasksControler.updateTask
);

module.exports = router;
