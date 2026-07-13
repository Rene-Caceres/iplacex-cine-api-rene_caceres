import express from "express";

import {
    handleInsertActorRequest,
    handleGetActoresRequest,
    handleGetActorByIdRequest,
    handleGetActoresByPeliculaIdRequest
} from "../actor/actorController.js";


const ActorRoutes = express.Router();


// Crear actor
ActorRoutes.post("/actor", handleInsertActorRequest);


// Obtener todos los actores
ActorRoutes.get("/actores", handleGetActoresRequest);


// Obtener actores por película
ActorRoutes.get("/actor/pelicula/:pelicula", handleGetActoresByPeliculaIdRequest);


// Obtener actor por ID
ActorRoutes.get("/actor/:id", handleGetActorByIdRequest);


export default ActorRoutes;