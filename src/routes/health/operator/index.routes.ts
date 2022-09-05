// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { planExistsAnsRegister } from "@middlewares/validation/exists/ansRegister/planExistsAnsRegister";
import { operatorExistsCNPJ } from "@middlewares/validation/exists/cnpj/operatorExistsCNPJ.middleware";
import { operatorExistsId } from "@middlewares/validation/exists/id/operatorExistsId.middleware";
import { planExistsId } from "@middlewares/validation/exists/id/planExistsId.middleware";
import { operatorExistsName } from "@middlewares/validation/exists/name/operatorExistsName.middleware";
import { planExistsName } from "@middlewares/validation/exists/name/planExistsName.middleware";
import { contactExistsNoOperator } from "@middlewares/validation/exists/operator/contactExistsNoOperator.middleware";
import { contactExistsOperator } from "@middlewares/validation/exists/operator/contactExistsOperator.middleware";
import { loginExistsNoOperator } from "@middlewares/validation/exists/operator/loginExistsNoOperator.middleware";
import { loginExistsOperator } from "@middlewares/validation/exists/operator/loginExistsOperator.middleware";
import { operatorExistsWebsite } from "@middlewares/validation/exists/website/operatorExistsWebsite.middleware";
import { providedContact } from "@middlewares/validation/provided/providedContact.middleware";
import { providedLogin } from "@middlewares/validation/provided/providedLogin.middleware";
import { providedOperator } from "@middlewares/validation/provided/providedOperator.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";
import { regexEmail } from "@middlewares/validation/regex/regexEmail.middleware";
import { regexPhone } from "@middlewares/validation/regex/regexPhone.middleware";
import { regexWebsite } from "@middlewares/validation/regex/regexWebsite.middleware";

// controllers imported:
import { AddContactOperatorController } from "@operator/addContact/AddContactOperatorController";
import { AddLoginOperatorController } from "@operator/addLogin/AddLoginOperatorController";
import { ChangeNameOperatorController } from "@operator/changeName/ChangeNameOperatorController";
import { ChangeWebsiteOperatorController } from "@operator/changeWebsite/ChangeWebsiteController";
import { CreateOperatorController } from "@operator/createOperator/CreateOperatorController";
import { DeleteContactOperatorController } from "@operator/deleteContact/DeleteContactOperatorController";
import { DeleteLoginOperatorController } from "@operator/deleteLogin/DeleteLoginOperatorController";
import { DeleteOperatorController } from "@operator/deleteOperator/DeleteOperatorController";
import { EditContactOperatorController } from "@operator/editContact/EditContactOperatorController";
import { EditLoginOperatorController } from "@operator/editLogin/EditLoginOperatorController";
import { FindAllOperatorsController } from "@operator/findAll/FindAllOperatorsController";
import { FindOperatorController } from "@operator/findOperator/findOperatorController";

import { CreatePlanController } from "@plan/createPlan/CreatePlanController";
import { DeletePlanController } from "@plan/deletePlan/DeletePlanController";
import { EditPlanController } from "@plan/editPlan/EditPlanController";

// router definitions:
const operatorRoutes = Router();

// controller registration:
const createOperatorController = new CreateOperatorController();
const changeNameOperatorController = new ChangeNameOperatorController();
const findOperatorController = new FindOperatorController();
const findAllOperatorsController = new FindAllOperatorsController();
const changeWebsiteOperatorController = new ChangeWebsiteOperatorController();
const deleteOperatorController = new DeleteOperatorController();
const addLoginOperatorController = new AddLoginOperatorController();
const editLoginOperatorController = new EditLoginOperatorController();
const deleteLoginOperatorController = new DeleteLoginOperatorController();
const addContactOperatorController = new AddContactOperatorController();
const editContactOperatorController = new EditContactOperatorController();
const deleteContactOperatorController = new DeleteContactOperatorController();
const createPlanController = new CreatePlanController();
const editPlanController = new EditPlanController();
const deletePlanController = new DeletePlanController();

// routes definitions:
/**
 * @route POST /operator/createOperator
 * @description Create an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.post(
  "/createOperator",
  providedOperator,
  regexWebsite,
  regexCNPJ,
  operatorExistsCNPJ,
  getCnpjJaToken,
  getCnpjJaInfo,
  createOperatorController.handle,
);

/**
 * @route POST /operator/changeName/{id_operator}
 * @description Change the name of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.put(
  "/changeName/:id_operator",
  operatorExistsId,
  operatorExistsName,
  changeNameOperatorController.handle,
);

/**
 * @route GET /operator/changeWebsite/{id_operator}
 * @description Change the website of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.put(
  "/changeWebsite/:id_operator",
  regexWebsite,
  operatorExistsId,
  operatorExistsWebsite,
  changeWebsiteOperatorController.handle,
);

/**
 * @route GET /operator/findOperator/{id_operator}
 * @description Find an operator by id
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.get(
  "/findOperator/:id_operator",
  operatorExistsId,
  findOperatorController.handle,
);

/**
 * @route GET /operator/findAll
 * @description Find all operators
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.get("/findAll", findAllOperatorsController.handle);

/**
 * @route DELETE /operator/deleteOperator/{id_operator}
 * @description Delete an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.delete(
  "/deleteOperator/:id_operator",
  operatorExistsId,
  deleteOperatorController.handle,
);

/**
 * @route POST /operator/addLogin/{id_operator}
 * @description Add a login to an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.post(
  "/addLogin/:id_operator",
  providedLogin,
  loginExistsOperator,
  operatorExistsId,
  addLoginOperatorController.handle,
);

/**
 * @route PUT /operator/editLogin/{id_operator}
 * @description Edit a login of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.put(
  "/editLogin/:id_operator",
  operatorExistsId,
  loginExistsNoOperator,
  editLoginOperatorController.handle,
);

/**
 * @route DELETE /operator/deleteLogin/{id_operator}
 * @description Delete a login of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.delete(
  "/deleteLogin/:id_operator",
  operatorExistsId,
  loginExistsNoOperator,
  deleteLoginOperatorController.handle,
);

/**
 * @route POST /operator/addContact/{id_operator}
 * @description Add a contact to an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.post(
  "/addContact/:id_operator",
  providedContact,
  regexEmail,
  regexPhone,
  operatorExistsId,
  contactExistsOperator,
  addContactOperatorController.handle,
);

/**
 * @route PUT /operator/editContact/{id_operator}
 * @description Edit a contact of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.put(
  "/editContact/:id_operator",
  operatorExistsId,
  contactExistsNoOperator,
  regexEmail,
  regexPhone,
  editContactOperatorController.handle,
);

/**
 * @route DELETE /operator/deleteContact/{id_operator}
 * @description Delete a contact of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.delete(
  "/deleteContact/:id_operator",
  operatorExistsId,
  contactExistsNoOperator,
  deleteContactOperatorController.handle,
);

/**
 * @route POST /operator/createPlan/{id_operator}
 * @description Create a plan for an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.post(
  "/:id_operator/createPlan",
  operatorExistsId,
  planExistsAnsRegister,
  planExistsName,
  createPlanController.handle,
);

/**
 * @route PUT /operator/editPlan/{id_operator}
 * @description Edit a plan of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.put(
  "/:id_operator/editPlan/:id_plan",
  operatorExistsId,
  planExistsId,
  editPlanController.handle,
);

/**
 * @route DELETE /operator/deletePlan/{id_operator}
 * @description Delete a plan of an operator
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.delete(
  "/:id_operator/deletePlan/:id_plan",
  operatorExistsId,
  planExistsId,
  deletePlanController.handle,
);

// export module:
export { operatorRoutes };
