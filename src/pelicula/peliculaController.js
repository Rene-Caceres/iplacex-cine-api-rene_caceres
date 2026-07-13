import { getDB } from "../common/db.js";
import { ObjectId } from "mongodb";

const peliculaCollection = () => {
    return getDB().collection("peliculas");
};


// INSERTAR PELÍCULA
export const handleInsertPeliculaRequest = async (req, res) => {
    try {
        const pelicula = req.body;

        const resultado = await peliculaCollection().insertOne(pelicula);

        res.status(201).json({
            mensaje: "Película creada correctamente",
            id: resultado.insertedId
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// OBTENER TODAS LAS PELÍCULAS
export const handleGetPeliculasRequest = async (req, res) => {
    try {
        const peliculas = await peliculaCollection()
            .find()
            .toArray();

        res.status(200).json(peliculas);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// OBTENER PELÍCULA POR ID
export const handleGetPeliculaByIdRequest = async (req, res) => {
    try {

        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensaje: "Id mal formado"
            });
        }

        const pelicula = await peliculaCollection().findOne({
            _id: new ObjectId(req.params.id)
        });

        res.status(200).json(pelicula);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// ACTUALIZAR PELÍCULA
export const handleUpdatePeliculaByIdRequest = async (req, res) => {
    try {

        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensaje: "Id mal formado"
            });
        }

        const resultado = await peliculaCollection().updateOne(
            {
                _id: new ObjectId(req.params.id)
            },
            {
                $set: req.body
            }
        );

        res.status(200).json(resultado);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// ELIMINAR PELÍCULA
export const handleDeletePeliculaByIdRequest = async (req, res) => {
    try {

        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensaje: "Id mal formado"
            });
        }

        const resultado = await peliculaCollection().deleteOne({
            _id: new ObjectId(req.params.id)
        });

        res.status(200).json(resultado);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};