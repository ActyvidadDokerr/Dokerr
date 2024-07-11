import { Router } from 'express';

const rutacanal = Router();

rutacanal.get("/canal", (req, res) => {
  res.json({
    "application": "Youtube"
  });
});

rutacanal.get("/canal/info", (req, res) => { 
  res.json({
    "msg": "hola furry",
    "user": "Furrys",
    "application": "Youtube",
    "type": "backend"
  });
});

export default rutacanal;
