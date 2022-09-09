// libraries imported:
import { Router } from "express";

// middlewares imported:
import { contactExistsNoOperator } from "@middlewares/validation/exists/operator/contactExistsNoOperator.middleware";
import { contactExistsOperator } from "@middlewares/validation/exists/operator/contactExistsOperator.middleware";
import { providedContact } from "@middlewares/validation/provided/providedContact.middleware";
import { regexEmail } from "@middlewares/validation/regex/regexEmail.middleware";
import { regexPhone } from "@middlewares/validation/regex/regexPhone.middleware";

// controllers imported:
import { AddContactOperatorController } from "@operator/addContact/AddContactOperatorController";
import { DeleteContactOperatorController } from "@operator/deleteContact/DeleteContactOperatorController";
import { EditContactOperatorController } from "@operator/editContact/EditContactOperatorController";

// controller registration:
const addContactOperatorController = new AddContactOperatorController();
const editContactOperatorController = new EditContactOperatorController();
const deleteContactOperatorController = new DeleteContactOperatorController();
// route definitions:
const contactRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /operator/:id_operator/addContact
 * @description Add a contact to an operator
 * @access Private
 * @author Raphael Vaz
 */
contactRoutes.post(
  "/addContact",
  providedContact,
  regexEmail,
  regexPhone,
  contactExistsOperator,
  addContactOperatorController.handle,
);

/**
 * @route PUT /operator/:id_operator/editContact
 * @description Edit a contact of an operator
 * @access Private
 * @author Raphael Vaz
 */
contactRoutes.put(
  "/editContact",
  contactExistsNoOperator,
  regexEmail,
  regexPhone,
  editContactOperatorController.handle,
);

/**
 * @route DELETE /operator/:id_operator/deleteContact
 * @description Delete a contact of an operator
 * @access Private
 * @author Raphael Vaz
 */
contactRoutes.delete(
  "/deleteContact/",
  contactExistsNoOperator,
  deleteContactOperatorController.handle,
);

// export
export { contactRoutes };
