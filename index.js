const express = require ("express")
const classContenedor = require("./container/archivos.Container")


const app = express();

const PORT = 8070

const archivo = new classContenedor('./productos.txt')

app.get('/productos', async (req, res)=>{
    const productos = await archivo.getById()
    console.log(productos);
    res.send({ Productos : 'lista de productos' })
})

app.get('/random', (req,res)=>{
    res.send({ Productos : 'productos random'})
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})    