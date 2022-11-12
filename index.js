const express = require ("express")
const classContainer = require("./container/archivos.Conteiner")


const app = express();

const PORT = 8070

const archivo = new classContainer('productos.txt')

app.get('/productos', async (req, res)=>{
    const productos = await archivo.getAll()
    console.log(productos);
    res.send({ Productos: productos })
})

app.get('/random', async (req,res)=>{
    const productos = await archivo.getAll()
    const random = parseInt(Math.random() * productos.length)
    res.send({ Productos: productos[random]})
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})    