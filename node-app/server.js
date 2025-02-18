const express = require("express");
const app = express();

// Manejar '/'
app.get("/", (req, res) => {
    res.send("Hola desde Node.js en Podman!");
});

// Manejar '/api/'
app.get("/api/", (req, res) => {
    res.send("Hola desde Node.js en Podman con API!");
});

// Asegurar que el servidor escuche en todas las interfaces
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Node.js corriendo en Podman en el puerto ${PORT}!`);
});