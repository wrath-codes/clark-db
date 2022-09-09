import { Router } from "express";

import { employerRoutes } from "./employer/employer.routes";
import { operatorRoutes } from "./operator/operator.routes";

const healthRoutes = Router();

// routes
healthRoutes.use("/operator", operatorRoutes);
healthRoutes.use("/employer", employerRoutes);

export { healthRoutes };
