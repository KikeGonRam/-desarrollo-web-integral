import dotenv from "dotenv";
import dns from "dns";
import express from "express";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import userRouter from "./routers/user.js";

dotenv.config();
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("Hola Mundo!"));
app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Conectado a MongoDB");
      app.listen(PORT, () => console.log(`Servidor en ${PORT}`));
    })
    .catch((err) => {
      console.error("Error conectando a MongoDB", err);
      process.exit(1);
    });
} else {
  console.warn(
    "MONGODB_URI no definido — iniciando sin conexión a base de datos",
  );
  app.listen(PORT, () => console.log(`Servidor en ${PORT}`));
}
