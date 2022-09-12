// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getLatitudeLongitude } from "@middlewares/externalAPI/cepAberto/getLatitudeLongitude.middleware";
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { employerExistsCNPJ } from "@middlewares/validation/exists/cnpj/employerExistsCNPJ.middleware";
import { brokerExistsId } from "@middlewares/validation/exists/id/brokerExistsId.middleware";
import { employerExistsId } from "@middlewares/validation/exists/id/employerExistsId.middleware";
import { employerExistsName } from "@middlewares/validation/exists/name/employerExistsName.middleware";
import { providedCNPJ } from "@middlewares/validation/provided/providedCNPJ.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";

// controllers imported:

import { AssignBrokerController } from "@employer/assignBroker/AssignBrokerController";
import { ChangeNameEmployerController } from "@employer/changeName/ChangeNameEmployerController";
import { CreateEmployerController } from "@employer/createEmployer/CreateEmployerController";
import { DeleteEmployerController } from "@employer/deleteEmployer/DeleteEmployerController";
import { FindAllEmployersController } from "@employer/findAll/FindAllEmployersController";
import { FindEmployerController } from "@employer/findEmployer/FindEmployerController";
import { GetEmployerOustideController } from "@employer/getEmployerOutside/GetEmployerOutsideController";

// route imports:
import { beneficiaryRoutes } from "./beneficiary/beneficiary.routes";
import { contactRoutes } from "./contact.routes";
import { contractRoutes } from "./contract/contract.routes";

// router definitions:
const employerRoutes = Router();
employerRoutes.use("/:id_employer/contract", employerExistsId, contractRoutes);
employerRoutes.use("/:id_employer/contact", employerExistsId, contactRoutes);
employerRoutes.use("/:id_employer/beneficiary", employerExistsId, beneficiaryRoutes);

// controller registration:
const createEmployerController = new CreateEmployerController();
const changeNameEmployerController = new ChangeNameEmployerController();
const findEmployerController = new FindEmployerController();
const findAllEmployersController = new FindAllEmployersController();
const deleteEmployerController = new DeleteEmployerController();
const assignBrokerController = new AssignBrokerController();

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
  "/:id_employer/changeName",
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
employerRoutes.get("/:id_employer/findEmployer", employerExistsId, findEmployerController.handle);

/**
 * @route DELETE /employer/deleteEmployer/{id_employer}
 * @description Delete an employer
 * @access Private
 * @author Raphael Vaz
 */
employerRoutes.delete(
  "/:id_employer/deleteEmployer",
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
  "/:id_employer/assignBroker/:id_broker",
  employerExistsId,
  brokerExistsId,
  assignBrokerController.handle,
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

// export module:
export { employerRoutes };
