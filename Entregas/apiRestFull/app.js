import express from "express";
import router from "./routes.js";

const app = express();


app.use(express.json());
app.use("/api", router);





app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
