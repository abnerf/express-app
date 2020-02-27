import express from "express";

import * as rootController from "./controllers/root";
import * as echoController from "./controllers/echo";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup main page route
app.get("/", rootController.getVersion);

// Setup /echo route
app.get("/echo", echoController.getEcho);
app.post("/echo", echoController.postEcho);

export default app;
