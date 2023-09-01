const express = require('express');
const colors = require('colors');
const moment = require('moment');

const userRoutes_v1 = require("./src/v1/router/users.routes");
const worksRoutes_v1 = require("./src/v1/router/works.routes");
const clientsRoutes_v1 = require("./src/v1/router/clients.routes");

const app = express();
const _port = 4000;

app.use(express.json());
app.use("/api/v1/users", userRoutes_v1);
app.use("/api/v1/works", worksRoutes_v1);
app.use("/api/v1/clients", clientsRoutes_v1);

app.listen(_port)

const cosoleHandler = () => {
    console.clear();
    console.log(`${moment().format('hh:mm:ss')} - ✔️ | The server is open on port ${_port}`.green);
    console.log(`${moment().format('hh:mm:ss')} - 🌐 | http://localhost:${_port}`.cyan);
}

cosoleHandler();