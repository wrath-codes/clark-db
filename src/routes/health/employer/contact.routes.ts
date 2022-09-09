// libraries imported:
import { Router } from "express";

// middlewares imported:
import { contactExistsEmployer } from "@middlewares/validation/exists/employer/contactExistsEmployer.middleware";
import { contactExistsNoEmployer } from "@middlewares/validation/exists/employer/contactExistsNoEmployer.middleware";
import { providedContact } from "@middlewares/validation/provided/providedContact.middleware";
import { regexEmail } from "@middlewares/validation/regex/regexEmail.middleware";
import { regexPhone } from "@middlewares/validation/regex/regexPhone.middleware";

// controllers imported:
import { AddContactEmployerController } from "@employer/addContact/AddContactEmployerController";
import { DeleteContactEmployerController } from "@employer/deleteContact/DeleteContactEmployerController";
import { EditContactEmployerController } from "@employer/editContact/EditContactEmployerUseCase";

// controller registration:
const addContactEmployerController = new AddContactEmployerController();
const editContactEmployerController = new EditContactEmployerController();
const deleteContactEmployerController = new DeleteContactEmployerController();

// route definitions:
const contactRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /employer/addContact/{id_employer}
 * @description Add a contact to an employer
 * @access Private
 * @author Raphael Vaz
 */
contactRoutes.post(
  "/addContact/",
  providedContact,
  regexEmail,
  regexPhone,
  contactExistsEmployer,
  addContactEmployerController.handle,
);

/**
 * @route PUT /employer/editContact/{id_employer}
 * @description Edit a contact of an employer
 * @access Private
 * @author Raphael Vaz
 */
contactRoutes.put(
  "/editContact/",
  regexEmail,
  regexPhone,
  contactExistsNoEmployer,
  editContactEmployerController.handle,
);

/**
 * @route DELETE /employer/deleteContact/{id_employer}
 * @description Delete a contact of an employer
 * @access Private
 * @author Raphael Vaz
 */
contactRoutes.delete(
  "/deleteContact/",
  contactExistsNoEmployer,
  deleteContactEmployerController.handle,
);

// export
export { contactRoutes };
