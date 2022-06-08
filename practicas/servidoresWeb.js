/* import http from 'http';

const timeNow = () =>{
    const date = new Date();
    const hour = date.getHours();
    if ( 6 < hour && hour < 12 ){
        return 'Buenas dias';
    } else if( 13 < hour && hour < 19 ){
        return 'Buenas tardes';
    } else{
        return 'Buenas noches';
    }
}



const server = http.createServer((req, res) => {
    res.end(timeNow());
});

const connectsServer = server.listen(8080, () => {

    console.log(`Servidor corriendo en el puerto ${connectsServer.address().port} `);
}) */

/* 
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto 3000`);
}); */



import express from 'express';
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>");
});

let visitas = 0;
app.get("/visitas", (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`);
  });

  app.get("/fyh", (req, res) => {
    res.send({
      fyh: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    });
  });
  
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto 3000`);
});
