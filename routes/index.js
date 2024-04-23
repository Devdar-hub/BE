import express from "express";
const app = express();
import userRoutes from "./userRoutes.js";
import todoRoutes from "./todoRoutes.js";

// Define user routes
app.use("/users",userRoutes);
app.use("/todo",todoRoutes);

export default app;
