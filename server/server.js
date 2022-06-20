const http = require("http");
const path = require("path");
const express = require("express");
const io = require("socket.io");

const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Esta es la comunicación del backend
module.exports.io = io(server);

require("./sockets/socket");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
