import  { Router } from "express";
import { Contenedor } from '../Contenedor.js';

const router = Router();
const file = new Contenedor ('../productos.txt');

router.get("/productos", async (req, res) => {
  try {
    await file.readFile().then(data => {
      res.send(JSON.parse(data));
    });
  } catch (error) {
      console.log(error);
  }
}  
);

router.get("/productos/:id", (req, res) => {
const id = parseInt(req.params.id)
try {
  file.readFile().then(data => {
    const productos = JSON.parse(data);
    const producto = productos.find(producto => producto.id === id);
    res.send(producto);
  }
  )} catch (error) {
    console.log(error);
  }
}
);


router.post("/productos/add", (req, res) => {
  const producto = req.body

  try {
      file.readFile().then(data => {
      const productos = JSON.parse(data);
      producto.id = productos.length + 1;
      productos.push(producto);
      file.writeFile(JSON.stringify(productos)); 
      res.send(producto); 
  /*    
      file.save(JSON.stringify(producto)).then(data => {
        res.send(data); */
      }
      )} catch (error) {
        console.log(error);
      }
});
    


router.delete("/productos/delete/:id", async (req, res) => {
 const id = parseInt(req.params.id)
  try {
    file.readFile().then(data => {
      const productos = JSON.parse(data);
      const producto = productos.find(producto => producto.id === id);
      const productosFiltrados = productos.filter(producto => producto.id !== id);
      file.writeFile(JSON.stringify(productosFiltrados));
      res.json(producto);
    }
    )} catch (error) {
      console.log(error);
    }});

router.put("/productos/update/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const productoAactualizar = req.body
  const productos = await file.readFile()
  const productoActualizado = JSON.parse(productos).map(producto => {
    if (producto.id === id) {
      return productoAactualizar
    } else {
      return producto
    }})

  file.writeFile(JSON.stringify(productoActualizado));
  res.json(productoActualizado);
});




export default router;
