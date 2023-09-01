const clientService = require('../services/clients.services')

const getAll = async (req, res) => {
    try {
      const allClients = await clientService.getAll(); 
      res.status(200).send({ status: "OK", users: allClients });
      console.log(allClients);
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(err);
    }
};

const getId = async (req, res) => {
    try {
      const client = await clientService.getId(req.params.id);
      if (client.length == 0) {
        res.status(200).send({ status: "OK", users: "Client not found" });
      }
      else {
        res.status(200).send({ status: "OK", users: client });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(err);
    }
};
  
module.exports = {
  getAll,
  getId
  };