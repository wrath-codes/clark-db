// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getLatitudeLongitude } from "@middlewares/externalAPI/cepAberto/getLatitudeLongitude.middleware";
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { employerExistsCNPJ } from "@middlewares/validation/exists/cnpj/employerExistsCNPJ.middleware";
import { contactExistsEmployer } from "@middlewares/validation/exists/employer/contactExistsEmployer.middleware";
import { contactExistsNoEmployer } from "@middlewares/validation/exists/employer/contactExistsNoEmployer.middleware";
import { brokerExistsId } from "@middlewares/validation/exists/id/brokerExistsId.middleware";
import { employerExistsId } from "@middlewares/validation/exists/id/employerExistsId.middleware";
import { employerExistsName } from "@middlewares/validation/exists/name/employerExistsName.middleware";
import { providedCNPJ } from "@middlewares/validation/provided/providedCNPJ.middleware";
import { providedContact } from "@middlewares/validation/provided/providedContact.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";
import { regexEmail } from "@middlewares/validation/regex/regexEmail.middleware";
import { regexPhone } from "@middlewares/validation/regex/regexPhone.middleware";

// controllers imported:

import { AddContactEmployerController } from "@employer/addContact/AddContactEmployerController";
import { AssignBrokerController } from "@employer/assignBroker/AssignBrokerController";
import { ChangeNameEmployerController } from "@employer/changeName/ChangeNameEmployerController";
import { CreateEmployerController } from "@employer/createEmployer/CreateEmployerController";
import { DeleteContactEmployerController } from "@employer/deleteContact/DeleteContactEmployerController";
import { DeleteEmployerController } from "@employer/deleteEmployer/DeleteEmployerController";
import { EditContactEmployerController } from "@employer/editContact/EditContactEmployerUseCase";
import { FindAllEmployersController } from "@employer/findAll/FindAllEmployersController";
import { FindEmployerController } from "@employer/findEmployer/FindEmployerController";
import { GetEmployerOustideController } from "@employer/getEmployerOutside/GetEmployerOutsideController";

// router definitions:
const employerRoutes = Router();

// controller registration:
const createEmployerController = new CreateEmployerController();
const changeNameEmployerController = new ChangeNameEmployerController();
const findEmployerController = new FindEmployerController();
const findAllEmployersController = new FindAllEmployersController();
const deleteEmployerController = new DeleteEmployerController();
const assignBrokerController = new AssignBrokerController();
const addContactEmployerController = new AddContactEmployerController();
const editContactEmployerController = new EditContactEmployerController();
const deleteContactEmployerController = new DeleteContactEmployerController();
const getEmployerOustideController = new GetEmployerOustideController();

// routes definitions:

/**
 * @route POST /employer/createEmployer
 * @description Create an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.post(
  "/createEmployer",
  providedCNPJ,
  regexCNPJ,
  employerExistsCNPJ,
  getCnpjJaToken,
  getCnpjJaInfo,
  getLatitudeLongitude,
  createEmployerController.handle,
);

/**
 * @route PUT /employer/findAll
 * @description Find all employers
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.get("/findAll", findAllEmployersController.handle);

/**
 * @route PUT /employer/changeName/{id_employer}
 * @description Change the name of an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.put(
  "/changeName/:id_employer",
  employerExistsId,
  employerExistsName,
  changeNameEmployerController.handle,
);

/**
 * @route PUT /employer/findEmployer/{id_employer}
 * @description Find an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.get(
  "/findEmployer/:id_employer",
  employerExistsId,
  findEmployerController.handle,
);

/**
 * @route DELETE /employer/deleteEmployer/{id_employer}
 * @description Delete an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.delete(
  "/deleteEmployer/:id_employer",
  employerExistsId,
  deleteEmployerController.handle,
);

/**
 * @route PUT /employer/assignBroker/{id_employer}/{id_broker}
 * @description Assign a broker to an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.put(
  "/assignBroker/:id_employer/:id_broker",
  employerExistsId,
  brokerExistsId,
  assignBrokerController.handle,
);

/**
 * @route POST /employer/addContact/{id_employer}
 * @description Add a contact to an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.post(
  "/addContact/:id_employer",
  employerExistsId,
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
employerRoutes.put(
  "/editContact/:id_employer",
  regexEmail,
  regexPhone,
  employerExistsId,
  contactExistsNoEmployer,
  editContactEmployerController.handle,
);

/**
 * @route DELETE /employer/deleteContact/{id_employer}
 * @description Delete a contact of an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.delete(
  "/deleteContact/:id_employer",
  employerExistsId,
  contactExistsNoEmployer,
  deleteContactEmployerController.handle,
);

employerRoutes.get(
  "/getEmployerOutside/",
  providedCNPJ,
  regexCNPJ,
  getCnpjJaToken,
  getCnpjJaInfo,
  getLatitudeLongitude,
  getEmployerOustideController.handle,
);

// export module:
export { employerRoutes };
