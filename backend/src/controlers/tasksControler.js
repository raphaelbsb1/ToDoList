const tasksModel = require('../models/tasksModel');

const getAll = async (request, response) => {
    const [tasks] = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const result = await tasksModel.createTask(request.body);
    return response.status(201).json(result);
};

const deleteTask = async (request, response) => {
    await tasksModel.deleteTask(request.params);
    return response.status(204).json();
}

const updateTask = async (request, response) => {
    await tasksModel.updateTask(request.params, request.body);
    return response.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}