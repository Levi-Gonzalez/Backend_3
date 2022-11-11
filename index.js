const express = require ("express")
const classContainer = require("./conteiner/archivos.Conteiner")


const app = express ();

const PORT = 8070

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
}) 