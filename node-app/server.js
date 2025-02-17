const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde Node.js en Podman!");
});

app.listen(3000, () => console.log("Server en puerto 3000"));
