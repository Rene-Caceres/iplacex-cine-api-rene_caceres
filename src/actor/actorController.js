import { getDB } from "../common/db.js";
import { ObjectId } from "mongodb";

const actorCollection = () => {
    return getDB().collection("actores");
};


// INSERTAR ACTOR
export const handleInsertActorRequest = async (req, res) => {
    try {

        const actor = req.body;

        // Validar que la película exista
        const pelicula = await getDB()
            .collection("peliculas")
            .findOne({
                nombre: actor.idPelicula
            });


        if (!pelicula) {
            return res.status(400).json({
                mensaje: "La película indicada no existe"
            });
        }


        const resultado = await actorCollection()
            .insertOne(actor);


        res.status(201).json({
            mensaje: "Actor creado correctamente",
            id: resultado.insertedId
        });


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};


// OBTENER TODOS LOS ACTORES
export const handleGetActoresRequest = async (req, res) => {
    try {

        const actores = await actorCollection()
            .find()
            .toArray();

        res.status(200).json(actores);


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};


// OBTENER ACTOR POR ID
export const handleGetActorByIdRequest = async (req, res) => {
    try {

        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                mensaje: "Id mal formado"
            });
        }


        const actor = await actorCollection()
            .findOne({
                _id: new ObjectId(req.params.id)
            });


        res.status(200).json(actor);


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};


// OBTENER ACTORES POR PELÍCULA
export const handleGetActoresByPeliculaIdRequest = async (req, res) => {
    try {

        const actores = await actorCollection()
            .find({
                idPelicula: req.params.pelicula
            })
            .toArray();


        res.status(200).json(actores);


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};