
import { Contenedor } from './Entrega2.js';
import express from 'express';

const file = new Contenedor ('./productos.txt');
const app = express();

app.get("/Productos", async (req, res) => {
  try {
    await file.readFile().then(data => {
      res.send(JSON.parse(data));
    });
  } catch (error) {
      console.log(error);
  }
}  
);

app.get("/productoRandom", async (req, res) => {
  try {
    await file.readFile().then(data => {
      const productos = JSON.parse(data);
      const random = Math.floor(Math.random() * productos.length);
      res.send(productos[random]);
    });
  } catch (error) {
      console.log(error);
  }
});


app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto 8080`);
});

