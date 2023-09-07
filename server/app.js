import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import ProductsRoutes from "./routes/products.routes.js";

const app = express();

// morgan es una herramienta que sirve para dejar mensajes por consola
app.use(morgan('dev'));
app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );
app.use(express.json());
app.use(cookieParser());

// indica que todas las rutas van a empezar con /api
app.use("/api", authRoutes);
app.use("/api", ProductsRoutes);

export default app;