const works = require("../../db/db");

const getAllWorks = async () => {
  try {
    const allUsers = await works.getAllWorks();
    console.log(allUsers);
    return allUsers;
  } catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const getOneWork = async (id) => {
  try {
    const getOneWork = await works.getOneWork(id);
    return getOneWork;
  } catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const createWork = async (nombre, descripcion, fecha) => {
  try {
    const workCreated = await works.createWork(nombre, descripcion, fecha);
    return workCreated;
  } catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const updateWork = async (id, nombre, descripcion, fecha) => {
  try {
      const workUpdated = await works.updateWork(id, nombre, descripcion, fecha);
      return workUpdated;
  }
  catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const deleteWork = async (id) => {
  try {
    const workDeleted = await works.deleteWork(id);
    return workDeleted;
  }
  catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

module.exports = {
  getAllWorks,
  getOneWork,
  updateWork,
  createWork,
  deleteWork,
};
