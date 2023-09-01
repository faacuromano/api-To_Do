const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "usuariosDb",
  user: "root",
  password: "1234",
});

//#region USER
const getAllUser = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM usuarios", (err, res, field) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
const getOneUser = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM usuarios WHERE id = ${id}`,
      (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};
const createUser = ( nombre, apellido, username, password, email, creacionCuenta) => {
  return new Promise((resolve, reject) => {
    connection.query(
    `
        INSERT INTO usuarios 
        (nombre, apellido, username, password, email, creacionCuenta ) 
        VALUES
        ('${nombre}', '${apellido}', '${username}', '${password}', '${email}', '${creacionCuenta}')
    `,
      (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};
const updateUser = (id, nombre, apellido, username, password, email, creacionCuenta) => {
  return new Promise((resolve, reject) => {
    connection.query(
    `
        UPDATE usuarios SET
        nombre = '${nombre}', 
        apellido = '${apellido}', 
        username = '${username}', 
        password = '${password}', 
        email = '${email}', 
        creacionCuenta = '${creacionCuenta}' 
        WHERE id = ${id}
    `, (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};
const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    connection.query( `DELETE FROM usuarios WHERE id = ${id}`,
        (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};
//#endregion

//#region WORKS
const getAllWorks = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM works", (err, res, field) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
const getOneWork = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM works WHERE id = ${id}`,
      (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      } 
    );
  });
};
const createWork = (nombre, descripcion, fecha) => {
  return new Promise((resolve, reject) => {
    connection.query(
    `
        INSERT INTO works 
        (nombre, descripcion, fecha) 
        VALUES
        ('${nombre}', '${descripcion}', '${fecha}')
    `,
      (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};
const updateWork = (id, nombre, descripcion, fecha) => {
  return new Promise((resolve, reject) => {
    connection.query(
    `
        UPDATE works SET
        nombre = '${nombre}', 
        descripcion = '${descripcion}', 
        fecha = '${fecha}'
        WHERE id = ${id}
    `, (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

const deleteWork = (id) => {
  return new Promise((resolve, reject) => {
    connection.query( `DELETE FROM usuarios WHERE id = ${id}`,
        (err, res, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};
//#endregion

//#region CLIENT
const getAllClients = async () => {
  return new Promise((resolve, reject) => {
    connection.query(
    `
    SELECT * FROM clients 
    JOIN usuarios ON usuarios.id = clients.id_usuarios
    `, (err, res, field) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(res)
      }
    })
  })
}

const getOneClient = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT * FROM clients 
      JOIN usuarios ON usuarios.id = clients.id_usuarios
      WHERE id_usuarios = ${id}
      `, (err, res, field) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(res)
      }
    })
  })
}

const createClient = async () => {
  return new Promise((resolve, reject) => {
    connection.query("", (err, res, field) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(res)
      }
    })
  })
  
}

const updateStateSub = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE clients SET estado_subscripcion = b'1' WHERE (id_usuarios = '${id}')`, (err, res, field) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(res)
      }
    })
  })
}

const updateClient = async () => {
  
}

const deleteClient = async () => {
  
}
//#endregion

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,

  getAllWorks,
  getOneWork,
  createWork,
  updateWork,
  deleteWork,

  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  updateStateSub,
  deleteClient,
};
