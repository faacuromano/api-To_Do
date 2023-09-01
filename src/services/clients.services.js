const clients = require('../../db/db')

const getAll = async () => {
    try {
      const allUsers = await clients.getAllClients();
      return allUsers;
    } catch (err) {
      console.log(err);
      throw new Error(`Error: ${err.message}`);
    }
};
  
const getId = async (id) => {
    try {
      const allUsers = await clients.getOneClient(id);
      return allUsers;
    } catch (err) {
      console.log(err);
      throw new Error(`Error: ${err.message}`);
    }
};
  
module.exports = {
  getAll,
  getId
  };
  