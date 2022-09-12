// libraries imported:
import { Router } from "express";

// middlewares imported:
import { agreementExistsId } from "@middlewares/validation/exists/id/agreementExistsId.middleware";
import { planExistsId } from "@middlewares/validation/exists/id/planExistsId.middleware";
import { validAgreementPlanHasAgreement } from "@middlewares/validation/valid/agreement/validAgreementPlanHasAgreement.middleware";
import { validAgreementPlanOfOperator } from "@middlewares/validation/valid/agreement/validAgreementPlanOfOperator.middleware";

// controllers imported:
import { AddDescriptionAgreementController } from "@agreement/addDescription/AddDescriptionAgreementController";
import { CreateAgreementController } from "@agreement/createAgreement/CreateAgreementController";

// router imports:
import { coPaymentRoutes } from "./coPayment.routes";
import { valueAgreementRoutes } from "./valueAgreement.routes";
import { valuesAgreementsRoutes } from "./valuesAgreement.routes";

// controller registration:
const createAgreementController = new CreateAgreementController();
const addDescriptionAgreementController = new AddDescriptionAgreementController();

// route definitions:
const agreementRoutes = Router({ mergeParams: true });
agreementRoutes.use("/:id_agreement/coPayment", agreementExistsId, coPaymentRoutes);
agreementRoutes.use("/:id_agreement/valueAgreement", agreementExistsId, valueAgreementRoutes);
agreementRoutes.use("/:id_agreement/valuesAgreement", agreementExistsId, valuesAgreementsRoutes);

// routes
/**
 * @route POST /contract/:id_contract/agreement/createAgreement/:id_plan
 * @description Create an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.post(
  "/createAgreement/:id_plan",
  planExistsId,
  validAgreementPlanOfOperator,
  validAgreementPlanHasAgreement,
  createAgreementController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/addDescription
 * @description Add description to an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.put(
  "/:id_agreement/addDescription",
  agreementExistsId,
  addDescriptionAgreementController.handle,
);

// export route:
export { agreementRoutes };
