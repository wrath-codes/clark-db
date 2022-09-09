// libraries imported:
import { Router } from "express";

// middlewares imported:
import { loginExistsNoOperator } from "@middlewares/validation/exists/operator/loginExistsNoOperator.middleware";
import { loginExistsOperator } from "@middlewares/validation/exists/operator/loginExistsOperator.middleware";
import { providedLogin } from "@middlewares/validation/provided/providedLogin.middleware";

// controllers imported:
import { AddLoginOperatorController } from "@operator/addLogin/AddLoginOperatorController";
import { DeleteLoginOperatorController } from "@operator/deleteLogin/DeleteLoginOperatorController";
import { EditLoginOperatorController } from "@operator/editLogin/EditLoginOperatorController";

// controller registration:
const addLoginOperatorController = new AddLoginOperatorController();
const editLoginOperatorController = new EditLoginOperatorController();
const deleteLoginOperatorController = new DeleteLoginOperatorController();

// route definitions:
const loginRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /operator/:id_operator/addLogin
 * @description Add a login to an operator
 * @access Private
 * @author Raphael Vaz
 */
loginRoutes.post(
  "/addLogin",
  providedLogin,
  loginExistsOperator,
  addLoginOperatorController.handle,
);

/**
 * @route PUT /operator/:id_operator/editLogin
 * @description Edit a login of an operator
 * @access Private
 * @author Raphael Vaz
 */
loginRoutes.put("/editLogin", loginExistsNoOperator, editLoginOperatorController.handle);

/**
 * @route DELETE /operator/:id_operator/deleteLogin
 * @description Delete a login of an operator
 * @access Private
 * @author Raphael Vaz
 */
loginRoutes.delete("/deleteLogin", loginExistsNoOperator, deleteLoginOperatorController.handle);
// export
export { loginRoutes };
