import express from "express";
import routes from "./routes/routes.js";
import notFound from "./middlewares/notFound.js";
import error from "./middlewares/error.js";


const app = express();

app.use(express.json());
app.use("/api", routes);

app.use(notFound);
app.use(error);

export default app;