// libraries imported:
import { Router } from "express";

// middlewares imported:
import { validValueAgreement } from "@middlewares/validation/valid/agreement/validValueAgreement.middleware";
import { validValueAgreementEdit } from "@middlewares/validation/valid/agreement/validValueAgreementEdit.middleware";
import { validValueAgreementNegative } from "@middlewares/validation/valid/agreement/validValueAgreementNegative.middleware";
import { validValueAgreementProvided } from "@middlewares/validation/valid/agreement/validValueAgreementProvided.middleware";
import { validValuesAgreement } from "@middlewares/validation/valid/agreement/validValuesAgreement.middleware";

// controllers imported:
import { AddValueAgreementController } from "@agreement/addValueAgreement/AddValueAgreementController";
import { EditValueAgreementController } from "@agreement/editValueAgreement/EditValueAgreementController";

import { SetValueAgreementToNullController } from "./../../../../../modules/health/contract/agreement/useCases/setValueAgreementToNull/SetValueAgreementToNullController";

// controller registration:
const addValueAgreementController = new AddValueAgreementController();
const editValueAgreementController = new EditValueAgreementController();
const setValueAgreementToNullController = new SetValueAgreementToNullController();

// route definitions:
const valueAgreementRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /contract/:id_contract/agreement/:id_agreement/addValueAgreement
 * @description Add value to an agreement
 * @access Private
 * @author Raphael Vaz
 */
valueAgreementRoutes.post(
  "/addValueAgreement",
  validValueAgreementProvided,
  validValueAgreementNegative,
  validValueAgreement,
  validValuesAgreement,
  addValueAgreementController.handle,
);

/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/editValueAgreement
 * @description Edit value of an agreement
 * @access Private
 * @author Raphael Vaz
 */
valueAgreementRoutes.put(
  "/editValueAgreement",
  validValueAgreementProvided,
  validValueAgreementNegative,
  validValueAgreementEdit,
  editValueAgreementController.handle,
);

valueAgreementRoutes.put(
  "/setValueAgreementToNull",
  validValueAgreementEdit,
  setValueAgreementToNullController.handle,
);

// export route:
export { valueAgreementRoutes };
