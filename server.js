import express from "express";
import cors from "cors";
import { connectDB } from "./src/common/db.js";
import peliculaRoutes from "./src/routes/peliculaRoutes.js";
import actorRoutes from "./src/routes/actorRoutes.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas de películas
app.use("/api", peliculaRoutes);

// Rutas de actores
app.use("/api", actorRoutes);

app.get("/", (req, res) => {
    res.send("Bienvenido al cine Iplacex");
});

connectDB()
    .then(() => {
        console.log("Conexión exitosa a MongoDB Atlas");

        app.listen(PORT, () => {
            console.log(`Servidor Express escuchando en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error al conectar con MongoDB Atlas:", error);
    });