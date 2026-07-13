import { MongoClient } from "mongodb";

const uri = "mongodb://renecaceres201585_db_user:Ale1989@ac-mzhinou-shard-00-00.664qzt7.mongodb.net:27017,ac-mzhinou-shard-00-01.664qzt7.mongodb.net:27017,ac-mzhinou-shard-00-02.664qzt7.mongodb.net:27017/?ssl=true&replicaSet=atlas-3ghqwd-shard-0&authSource=admin&appName=eva-u3-express";

const client = new MongoClient(uri);

let db;

export const connectDB = async () => {
    try {
        await client.connect();

        db = client.db("cine-db");

        return db;

    } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error);
        throw error;
    }
};

export const getDB = () => {
    return db;
};