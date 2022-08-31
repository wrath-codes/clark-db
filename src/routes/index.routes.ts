import { Router } from "express";

import { operatorRoutes } from "./operator.routes";

const routes = Router();

// routes
routes.use("/api/operator", operatorRoutes);

export { routes };
