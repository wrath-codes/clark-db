// libraries imported:
import { Router } from "express";

// middlewares imported:
import { validValueAgreement } from "@middlewares/validation/valid/agreement/validValueAgreement.middleware";
import { validValuesAgreement } from "@middlewares/validation/valid/agreement/validValuesAgreement.middleware";
import { validValuesAgreementEdit } from "@middlewares/validation/valid/agreement/validValuesAgreementEdit.middleware";
import { validValuesAgreementInput } from "@middlewares/validation/valid/agreement/validValuesAgreementInput.middleware";
import { validValuesAgreementNegative } from "@middlewares/validation/valid/agreement/validValuesAgreementNegative.middleware";

// controllers imported:
import { AddValuesAgreementController } from "@agreement/addValuesAgreement/AddValuesAgreementController";
import { EditValuesAgreementController } from "@agreement/editValuesAgreement/EditValuesAgreementController";
import { SetValuesAgreementToNullController } from "@agreement/setValuesAgreementToNull/SetValuesAgreementToNullController";

// controller registration:
const addValuesAgreementController = new AddValuesAgreementController();
const editValuesAgreementController = new EditValuesAgreementController();
const setValuesAgreementToNullController = new SetValuesAgreementToNullController();

// route definitions:
const valuesAgreementsRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /contract/:id_contract/agreement/:id_agreement/addValuesAgreement
 * @description Add values to an agreement
 * @access Private
 * @author Raphael Vaz
 */
valuesAgreementsRoutes.post(
  "/addValuesAgreement",
  validValuesAgreementInput,
  validValuesAgreementNegative,
  validValuesAgreement,
  validValueAgreement,
  addValuesAgreementController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/editValuesAgreement
 * @description Edit values of an agreement
 * @access Private
 * @author Raphael Vaz
 */
valuesAgreementsRoutes.put(
  "/editValuesAgreement",
  validValuesAgreementEdit,
  editValuesAgreementController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/setValuesAgreementToNull
 * @description Set values of an agreement to null
 * @access Private
 * @author Raphael Vaz
 */
valuesAgreementsRoutes.put(
  "/setValuesAgreementToNull",
  validValuesAgreementEdit,
  setValuesAgreementToNullController.handle,
);

// export route:
export { valuesAgreementsRoutes };
