import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import {notFound, errorHandler} from './middleware/middleware.js'

dotenv.config();
const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
const app = express();
connectDB();


app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


// creating 404 error middleware
app.use(notFound)

// creating error middleware
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${mode} mode on port ${PORT}`));
