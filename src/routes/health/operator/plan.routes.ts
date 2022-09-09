// libraries imported:
import { Router } from "express";

// middlewares imported:
import { planExistsAnsRegister } from "@middlewares/validation/exists/ansRegister/planExistsAnsRegister";
import { planExistsId } from "@middlewares/validation/exists/id/planExistsId.middleware";
import { planExistsName } from "@middlewares/validation/exists/name/planExistsName.middleware";
import { planExistsAnotherOperator } from "@middlewares/validation/exists/operator/planExistsAnotherOperator.middleware";
import { regexReach } from "@middlewares/validation/regex/regexReach.middleware";

// controllers imported:
import { CreatePlanController } from "@plan/createPlan/CreatePlanController";
import { DeletePlanController } from "@plan/deletePlan/DeletePlanController";
import { EditPlanController } from "@plan/editPlan/EditPlanController";
import { FindPlanController } from "@plan/findPlan/FindPlanController";
import { FindPlansOperatorController } from "@plan/findPlans/FindPlansOperatorController";

// controller registration:
const createPlanController = new CreatePlanController();
const editPlanController = new EditPlanController();
const deletePlanController = new DeletePlanController();
const findPlanController = new FindPlanController();
const findPlansOperatorController = new FindPlansOperatorController();

// route definitions:
const planRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /operator/:id_operator/plan/createPlan
 * @description Create a plan for an operator
 * @access Private
 * @author Raphael Vaz
 */
planRoutes.post(
  "/createPlan",
  regexReach,
  planExistsAnsRegister,
  planExistsName,
  createPlanController.handle,
);

/**
 * @route PUT /operator/:id_operator/plan/:id_plan/editPlan
 * @description Edit a plan of an operator
 * @access Private
 * @author Raphael Vaz
 */
planRoutes.put(
  "/:id_plan/editPlan",
  planExistsId,
  planExistsAnotherOperator,
  editPlanController.handle,
);

/**
 * @route DELETE /operator/:id_operator/plan/:id_plan/deletePlan
 * @description Delete a plan of an operator
 * @access Private
 * @author Raphael Vaz
 */
planRoutes.delete(
  "/:id_plan/deletePlan",
  planExistsId,
  planExistsAnotherOperator,
  deletePlanController.handle,
);

/**
 * @route GET /operator/:id_operator/plan/:id_plan/findPlan
 * @description Find a plan of an operator
 * @access Private
 * @author Raphael Vaz
 */
planRoutes.get(
  "/:id_plan/findPlan",
  planExistsId,
  planExistsAnotherOperator,
  findPlanController.handle,
);

/**
 * @route GET /operator/:id_operator/plan/findAllPlans
 * @description Find all plans of an operator
 * @access Private
 * @author Raphael Vaz
 */
planRoutes.get("/findAllPlans", findPlansOperatorController.handle);

// export
export { planRoutes };
