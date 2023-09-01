const userServices = require("../services/user.services");

const getAll = async (req, res) => {
  try {
    const allUsers = await userServices.getAll();
    res.status(200).send({ status: "OK", users: allUsers });
    console.log(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getOne = async (req, res) => {
  try {
    const selectedUser = await userServices.getOne(req.params.id);
    console.log(selectedUser.length)
    if (selectedUser.length == 0) {
      res.status(200).send({ status: "OK", users: "User not found" });
    }
    else {
      res.status(200).send({ status: "OK", users: selectedUser });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const selectedUser = await userServices.createUser(
      req.body.nombre,
      req.body.apellido,
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.creacionCuenta
    );
    res.status(200).send({ status: "OK", users: selectedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const selectedUser = await userServices.updateUser(
      req.params.id,
      req.body.nombre,
      req.body.apellido,
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.creacionCuenta
    );
    res.status(200).send({ status: "OK", users: selectedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const selectedUser = await userServices.deleteUser(req.params.id);
    res.status(200).send({ status: "OK", users: selectedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports = {
  getAll,
  getOne,
  createUser,
  updateUser,
  deleteUser,
};
