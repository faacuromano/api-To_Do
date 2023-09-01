const users = require("../../db/db");

const getAll = async () => {
  try {
    const allUsers = await users.getAllUser();
    console.log(allUsers);
    return allUsers;
  } catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const getOne = async (id) => {
  try {
    const selectedUser = await users.getOneUser(id);
    console.log(selectedUser.length)
    return selectedUser;
  } catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const createUser = async (nombre, apellido, username, password, email, creacionCuenta) => {
  try {
    const selectedUser = await users.createUser(nombre, apellido, username, password, email, creacionCuenta);
    return selectedUser;
  } catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const updateUser = async (id, nombre, apellido, username, password, email, creacionCuenta) => {
  try {
      const selectedUser = await users.updateUser(id, nombre, apellido, username, password, email, creacionCuenta);
      return selectedUser;
  }
  catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

const deleteUser = async (id) => {
  try {
    const selectedUser = await users.deleteUser(id);
    return selectedUser;
  }
  catch (err) {
    console.log(err);
    throw new Error(`Error: ${err.message}`);
  }
};

module.exports = {
  getAll,
  getOne,
  updateUser,
  createUser,
  deleteUser,
};
