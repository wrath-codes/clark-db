import { Router } from "express";

import { brokerRoutes } from "./broker.routes";
import { healthRoutes } from "./health/health.routes";

const routes = Router();

// routes
routes.use("/health", healthRoutes);
routes.use("/broker", brokerRoutes);

export { routes };
