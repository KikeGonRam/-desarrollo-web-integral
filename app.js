import dotenv from "dotenv";
import express from "express";
import userRouter from "./routers/user.js";

dotenv.config();
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("Hola Mundo!"));
app.use("/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor en ${PORT}`));
