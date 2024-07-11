import { Router } from "express";
import rutacanal from "./routes.rutacanal.js"
const ruta = Router();

ruta.use("/", rutacanal) 

export default ruta;