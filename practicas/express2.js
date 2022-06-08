const express = require("express")
const app = express();

const frase = 'hola mundo como estan'

app.get("/api/frase", (req, res) => {
    res.json({frase});
});

app.get("/api/frases/:num", (req, res) => {
    try{
        const num = parseInt(req.params.num);
        if (isNaN(num)){
            throw new Error("No es un numero");
        }else if (num < 1 || num > frase.length) {
            throw new Error("El numero debe ser positivo y estar dentro del rango");
        } else {
        res.json({frase: frase.slice(0, num)});}
    }catch(e){
        res.status(400).json({error: e.message});
    }
});

app.get("/api/palabras/:num", (req, res) => {
    try{
        const num = parseInt(req.params.num);
        const palabras = frase.split(" ");
        if (isNaN(num)){
            throw new Error("No es un numero");
        }else if (num < 1 || num > palabras.length) {
            throw new Error("El numero debe ser positivo y estar dentro del rango");
        } else {
        res.json({palabras: palabras.slice(0, num)});}
    }catch(e){
        res.status(400).json({error: e.message});
    }
});

app.get("/api/sumar/:num1/:num2", (req, res) => {
    try{
        const num = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);
        if (isNaN(num)){
            throw new Error("No es un numero");
        }else if (num < 1 || num > frase.length) {
            throw new Error("El numero debe ser positivo y estar dentro del rango");
        } else {
            const total = num + num2;
        res.json({total});}
    }catch(e){
        res.status(400).json({error: e.message});
    }
});


app.get("/api/sumar?", (req, res) => {
    try{
        const num = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);
        if (isNaN(num)){
            throw new Error("No es un numero");
        } else {
            const total = num + num2;
        res.json({total});}
    }catch(e){
        res.status(400).json({error: e.message});
    }
});




app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto 18080`);
});



