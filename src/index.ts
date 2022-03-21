import express, { Express, Request, Response } from 'express';
import "./config/database"
import routes from "./routes"
const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));