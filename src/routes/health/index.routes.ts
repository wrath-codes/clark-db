import { Router } from "express";

import { employerRoutes } from "./employer/index.routes";
import { operatorRoutes } from "./operator/index.routes";

const healthRoutes = Router();

// routes
healthRoutes.use("/operator", operatorRoutes);
healthRoutes.use("/employer", employerRoutes);

export { healthRoutes };
