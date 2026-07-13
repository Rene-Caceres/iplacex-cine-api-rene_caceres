import express from "express";

import {
    handleInsertPeliculaRequest,
    handleGetPeliculasRequest,
    handleGetPeliculaByIdRequest,
    handleUpdatePeliculaByIdRequest,
    handleDeletePeliculaByIdRequest
} from "../pelicula/peliculaController.js";


const peliculaRoutes = express.Router();


// Crear película
peliculaRoutes.post("/pelicula", handleInsertPeliculaRequest);


// Obtener todas las películas
peliculaRoutes.get("/peliculas", handleGetPeliculasRequest);


// Obtener película por ID
peliculaRoutes.get("/pelicula/:id", handleGetPeliculaByIdRequest);


// Actualizar película
peliculaRoutes.put("/pelicula/:id", handleUpdatePeliculaByIdRequest);


// Eliminar película
peliculaRoutes.delete("/pelicula/:id", handleDeletePeliculaByIdRequest);


export default peliculaRoutes;