import fs, { writeFileSync } from 'fs';

/* try{
    fs.writeFileSync("fyh.txt",Date().toString())
    const datos = fs.readFileSync("fyh.txt", "utf-8")
    console.log (`Los datos en los archivos son: ${datos}`)

} catch(err){

    throw new Error(`la accion no pudo ser realizada ${err.message} `)

} */
/* 
const ruta = "../package.json"
fs.readFile(ruta, "utf-8", (err, data) => {
    if(err) throw new Error(`la accion no pudo ser realizada ${err.message} `)
    
    const info = {
        contenidoStr: JSON.stringify(data),
        contenidoObj: JSON.parse(data),
        size: fs.statSync(ruta).size,
    };

    console.log(info)

    fs.writeFile("./info", JSON.stringify(info, null, 2), err => {  
        if(err) throw new Error(`la accion no pudo ser realizada ${err.message} `)
    })


}) */

const agregarAuthor = async () => {

    try{
        const contenido = await fs.promises.readFile("./info.txt", "utf-8")
        const ObjInfo = JSON.parse(contenido)
        ObjInfo.contenidoObj.name = "Fernando3"
        await fs.promises.writeFile("./info.txt", JSON.stringify(ObjInfo, null, 2));

    }catch(err){
        throw new Error(`la accion no pudo ser realizada ${err.message} `)
    }
}

agregarAuthor()