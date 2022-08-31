// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from "dotenv";
import express from "express";

import { errorHandler, notFoundHandler } from "@middlewares/error.middleware";

import { routes } from "@routes/index.routes";

config();
const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(process.env.PORT, () => {
  console.log(`Servidor da Clark Seguros rodando na ${process.env.PORT}`);
});
