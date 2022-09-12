// libraries imported:
import { Router } from "express";

// middlewares imported:
import { agreementExistsId } from "@middlewares/validation/exists/id/agreementExistsId.middleware";
import { planExistsId } from "@middlewares/validation/exists/id/planExistsId.middleware";
import { validAgreementPlanHasAgreement } from "@middlewares/validation/valid/agreement/validAgreementPlanHasAgreement.middleware";
import { validAgreementPlanOfOperator } from "@middlewares/validation/valid/agreement/validAgreementPlanOfOperator.middleware";
import { validCopaymentEdit } from "@middlewares/validation/valid/agreement/validCopaymentEdit.middleware";
import { validCopaymentInsert } from "@middlewares/validation/valid/agreement/validCopaymentInsert.middleware";
import { validValueAgreement } from "@middlewares/validation/valid/agreement/validValueAgreement.middleware";
import { validValueAgreementEdit } from "@middlewares/validation/valid/agreement/validValueAgreementEdit.middleware";
import { validValueAgreementNegative } from "@middlewares/validation/valid/agreement/validValueAgreementNegative.middleware";
import { validValueAgreementProvided } from "@middlewares/validation/valid/agreement/validValueAgreementProvided.middleware";
import { validValuesAgreement } from "@middlewares/validation/valid/agreement/validValuesAgreement.middleware";
import { validValuesAgreementEditInput } from "@middlewares/validation/valid/agreement/validValuesAgreementEditInput.middleware";
import { validValuesAgreementInput } from "@middlewares/validation/valid/agreement/validValuesAgreementInput.middleware";
import { validValuesAgreementNegative } from "@middlewares/validation/valid/agreement/validValuesAgreementNegative.middleware";

// controllers imported:
import { AddCopaymentController } from "@agreement/addCopayment/AddCopaymentController";
import { AddDescriptionAgreementController } from "@agreement/addDescription/AddDescriptionAgreementController";
import { AddValueAgreementController } from "@agreement/addValueAgreement/AddValueAgreementController";
import { AddValuesAgreementController } from "@agreement/addValuesAgreement/AddValuesAgreementController";
import { CreateAgreementController } from "@agreement/createAgreement/CreateAgreementController";
import { EditCopaymentController } from "@agreement/editCopayment/EditCopaymentController";
import { EditValueAgreementController } from "@agreement/editValueAgreement/EditValueAgreementController";
import { EditValuesAgreementController } from "@agreement/editValuesAgreement/EditValuesAgreementController";

// controller registration:
const createAgreementController = new CreateAgreementController();
const addDescriptionAgreementController = new AddDescriptionAgreementController();
const addCopaymentController = new AddCopaymentController();
const addValueAgreementController = new AddValueAgreementController();
const addValuesAgreementController = new AddValuesAgreementController();
const editCopaymentController = new EditCopaymentController();
const editValueAgreementController = new EditValueAgreementController();
const editValuesAgreementController = new EditValuesAgreementController();

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

/**
 * @route POST /contract/:id_contract/agreement/:id_agreement/addCopayment
 * @description Add copayment to an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.post(
  "/:id_agreement/addCopayment",
  agreementExistsId,
  validCopaymentInsert,
  addCopaymentController.handle,
);

/**
 * @route POST /contract/:id_contract/agreement/:id_agreement/addValueAgreement
 * @description Add value to an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.post(
  "/:id_agreement/addValueAgreement",
  validValueAgreementProvided,
  validValueAgreementNegative,
  agreementExistsId,
  validValueAgreement,
  validValuesAgreement,
  addValueAgreementController.handle,
);

/**
 * @route POST /contract/:id_contract/agreement/:id_agreement/addValuesAgreement
 * @description Add values to an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.post(
  "/:id_agreement/addValuesAgreement",
  validValuesAgreementInput,
  validValuesAgreementNegative,
  agreementExistsId,
  validValuesAgreement,
  validValueAgreement,
  addValuesAgreementController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/editCopayment
 * @description Edit copayment of an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.put(
  "/:id_agreement/editCopayment",
  agreementExistsId,
  validCopaymentEdit,
  editCopaymentController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/editValueAgreement
 * @description Edit value of an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.put(
  "/:id_agreement/editValueAgreement",
  validValueAgreementProvided,
  validValueAgreementNegative,
  agreementExistsId,
  validValueAgreementEdit,
  editValueAgreementController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/editValuesAgreement
 * @description Edit values of an agreement
 * @access Private
 * @author Raphael Vaz
 */
agreementRoutes.put(
  "/:id_agreement/editValuesAgreement",
  validValuesAgreementEditInput,
  agreementExistsId,
  editValuesAgreementController.handle,
);

// export route:
export { agreementRoutes };
