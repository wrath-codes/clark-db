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
import { contractExistsId } from "@middlewares/validation/exists/id/contractExistsId.middleware";
import { employerExistsId } from "@middlewares/validation/exists/id/employerExistsId.middleware";
import { operatorExistsId } from "@middlewares/validation/exists/id/operatorExistsId.middleware";
import { employerExistsName } from "@middlewares/validation/exists/name/employerExistsName.middleware";
import { contractExistsNumber } from "@middlewares/validation/exists/number/contractExistsNumber.middleware";
import { providedCNPJ } from "@middlewares/validation/provided/providedCNPJ.middleware";
import { providedContact } from "@middlewares/validation/provided/providedContact.middleware";
import { providedContract } from "@middlewares/validation/provided/providedContract.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";
import { regexEmail } from "@middlewares/validation/regex/regexEmail.middleware";
import { regexPhone } from "@middlewares/validation/regex/regexPhone.middleware";
import { validContractDate } from "@middlewares/validation/valid/contract/validContractDate.middleware";
import { validContractStatusNotCancelado } from "@middlewares/validation/valid/contract/validContractStatusNotCancelado.middleware";
import { validContractStatusValido } from "@middlewares/validation/valid/contract/validContractStatusValido.middleware";

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

import { CancelContractController } from "@contract/cancelContract/CancelContractController";
import { CreateContractController } from "@contract/createContract/CreateContractController";
import { EndContractController } from "@contract/endContract/EndContractController";
import { FindAllContractsEmployerController } from "@contract/findAll/FindAllContractsEmployerController";
import { FindInvalidContractsEmployerController } from "@contract/findInvalid/FindInvalidContractsEmployerController";
import { FindValidContractEmployerController } from "@contract/findValid/FindValidContractsEmployerController";

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
const createContractController = new CreateContractController();
const cancelContractController = new CancelContractController();
const endContractController = new EndContractController();
const findAllContractsEmployerController =
  new FindAllContractsEmployerController();
const findValidContractsEmployerController =
  new FindValidContractEmployerController();
const findInvalidContractsEmployerController =
  new FindInvalidContractsEmployerController();

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

/**
 * @route GET /employer/getEmployerOutside/
 * @description Get employers outside the system
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.get(
  "/getEmployerOutside/",
  providedCNPJ,
  regexCNPJ,
  getCnpjJaToken,
  getCnpjJaInfo,
  getLatitudeLongitude,
  getEmployerOustideController.handle,
);

/**
 * @route POST /employer/createContract/{id_employer}/{id_operator}
 * @description Create a contract
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.post(
  "/createContract/:id_employer/:id_operator",
  providedContract,
  validContractDate,
  employerExistsId,
  operatorExistsId,
  contractExistsNumber,
  createContractController.handle,
);

/**
 * @route PATCH /employer/cancelContract/{id_contract}
 * @description Cancel a contract
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.patch(
  "/cancelContract/:id_contract",
  contractExistsId,
  validContractStatusValido,
  cancelContractController.handle,
);

/**
 * @route PATCH /employer/endContract/{id_contract}
 * @description End a contract
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.patch(
  "/endContract/:id_contract",
  contractExistsId,
  validContractStatusValido,
  validContractStatusNotCancelado,
  endContractController.handle,
);

/**
 * @route GET /employer/findAllContracts/{id_employer}
 * @description Find all contracts of an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.get(
  "/findAllContracts/:id_employer",
  employerExistsId,
  findAllContractsEmployerController.handle,
);

/**
 * @route GET /employer/findValidContracts/{id_employer}
 * @description Find all valid contracts of an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.get(
  "/findValidContracts/:id_employer",
  employerExistsId,
  findValidContractsEmployerController.handle,
);

/**
 * @route GET /employer/findInvalidContracts/{id_employer}
 * @description Find all invalid contracts of an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.get(
  "/findInvalidContracts/:id_employer",
  employerExistsId,
  findInvalidContractsEmployerController.handle,
);

// export module:
export { employerRoutes };
