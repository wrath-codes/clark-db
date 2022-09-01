// libraries imported:
import { Router } from "express";

// middlewares imported:
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

// router definitions:
const employerRoutes = Router();

// controller registration:
const createEmployerController = new CreateEmployerController();
const changeNameEmployerController = new ChangeNameEmployerController();
const findEmployerController = new FindEmployerController();
const findAllEmployersController = new FindAllEmployersController();
const deleteEmployerController = new DeleteEmployerController();
const assignBrokerController = new AssignBrokerController();

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

// export module:
export { employerRoutes };
