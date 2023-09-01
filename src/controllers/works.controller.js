const workServices = require("../services/works.services");

const getAllWorks = async (req, res) => {
  try {
    const allUsers = await workServices.getAllWorks();
    res.status(200).send({ status: "OK", works: allUsers });
    console.log(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const getOneWork = async (req, res) => {
  try {
    const selectedUser = await workServices.getOneWork(req.params.id);
    res.status(200).send({ status: "OK", work: selectedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const createWork = async (req, res) => {
  try {
    const workToCreate = await workServices.createWork(
      req.body.nombre,
      req.body.descripcion,
      req.body.fecha
    );
    res.status(200).send({ status: "OK", work: workToCreate });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const updateWork = async (req, res) => {
  try {
    const updateWork = await workServices.updateWork(
      req.params.id,
      req.body.nombre,
      req.body.descripcion,
      req.body.fecha
    );
    res.status(200).send({ status: "OK", work: updateWork });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const deleteWork = async (req, res) => {
  try {
    const deletedWork = await workServices.deleteWork(req.params.id);
    res.status(200).send({ status: "OK", userDeleted: deletedWork });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports = {
  getAllWorks,
  getOneWork,
  createWork,
  updateWork,
  deleteWork
};
