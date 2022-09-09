// libraries imported:
import { Router } from "express";

// middlewares imported:
import { agreementExistsId } from "@middlewares/validation/exists/id/agreementExistsId.middleware";
import { planExistsId } from "@middlewares/validation/exists/id/planExistsId.middleware";
import { validAgreementPlanOfOperator } from "@middlewares/validation/valid/agreement/validAgreementPlanOfOperator.middleware";

// controllers imported:
import { validCopaymentInsert } from "@middlewares/validation/valid/agreement/validCopaymentInsert.middleware";

import { AddCopaymentController } from "@agreement/addCopayment/AddCopaymentController";
import { AddDescriptionAgreementController } from "@agreement/addDescription/AddDescriptionAgreementController";
import { CreateAgreementController } from "@agreement/createAgreement/CreateAgreementController";

// controller registration:
const createAgreementController = new CreateAgreementController();
const addDescriptionAgreementController = new AddDescriptionAgreementController();
const addCopaymentController = new AddCopaymentController();

// route definitions:
const agreementRoutes = Router({ mergeParams: true });

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

agreementRoutes.post(
  "/:id_agreement/addCopayment",
  agreementExistsId,
  validCopaymentInsert,
  addCopaymentController.handle,
);

// export route:
export { agreementRoutes };
