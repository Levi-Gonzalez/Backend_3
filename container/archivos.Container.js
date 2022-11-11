const fs=require ("fs").promises

class Contenedor {
    constructor (path){
        this.path = path
    }

    async save(objeto){
        try{
            const leer = await fs.readFile(this.path, "utf-8");
            const data= JSON.parse(leer)
            let id;
            data.length == 0
                ? (id = 1)
                : (id = data [data.length - 1].id + 1)
            const newProducto = {...objeto,id}
            data.push(newProducto)
             await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return newProducto.id
        }catch (e){
            console.log(e);
        }
    }
    async getById(){
        try {
            const leer = await this.fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(leer)
        } catch (error) {
            return [];
        }
    }
    async getAll(){
        const leer = await fs.readFile(this.path, "utf-8");
        return JSON.parse(leer)
    }
    async deleteById(){
        try{
            await this.fs.promises.unlink(this.path)
            console.log("productos borrados");
        }
        catch(error){
            console.log(`Error en borrar: ${error}`);
        }

    }
    async deleteAll(){
        try {
            await fs.writeFile(this.path , JSON.stringify([], null , 2), "utf-8")
        } catch (e){ 
            console.log(e);
        }
    }
}
module.exports = Contenedor