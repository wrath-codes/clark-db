// libraries imported:
import { Router } from "express";

// middlewares imported:
import { agreementExistsId } from "@middlewares/validation/exists/id/agreementExistsId.middleware";
import { validCopaymentEdit } from "@middlewares/validation/valid/agreement/validCopaymentEdit.middleware";
import { validCopaymentInsert } from "@middlewares/validation/valid/agreement/validCopaymentInsert.middleware";

// controllers imported:
import { AddCopaymentController } from "@agreement/addCopayment/AddCopaymentController";
import { EditCopaymentController } from "@agreement/editCopayment/EditCopaymentController";

// controller registration:
const addCopaymentController = new AddCopaymentController();
const editCopaymentController = new EditCopaymentController();

// route definitions:
const coPaymentRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /contract/:id_contract/agreement/:id_agreement/addCopayment
 * @description Add copayment to an agreement
 * @access Private
 * @author Raphael Vaz
 */
coPaymentRoutes.post(
  "/addCopayment",
  agreementExistsId,
  validCopaymentInsert,
  addCopaymentController.handle,
);
/**
 * @route PUT /contract/:id_contract/agreement/:id_agreement/editCopayment
 * @description Edit copayment of an agreement
 * @access Private
 * @author Raphael Vaz
 */
coPaymentRoutes.put(
  "/editCopayment",
  agreementExistsId,
  validCopaymentEdit,
  editCopaymentController.handle,
);

// export route:
export { coPaymentRoutes };
