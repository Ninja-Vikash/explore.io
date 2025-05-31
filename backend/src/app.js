import cors from "cors";
import express from "express";
import searchRoute from "./routes/search.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES

app.use("/api", searchRoute);

export { app };
