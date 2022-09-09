// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getLatitudeLongitude } from "@middlewares/externalAPI/cepAberto/getLatitudeLongitude.middleware";
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { operatorExistsCNPJ } from "@middlewares/validation/exists/cnpj/operatorExistsCNPJ.middleware";
import { operatorExistsId } from "@middlewares/validation/exists/id/operatorExistsId.middleware";
import { operatorExistsName } from "@middlewares/validation/exists/name/operatorExistsName.middleware";
import { operatorExistsWebsite } from "@middlewares/validation/exists/website/operatorExistsWebsite.middleware";
import { providedCNPJ } from "@middlewares/validation/provided/providedCNPJ.middleware";
import { providedOperator } from "@middlewares/validation/provided/providedOperator.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";
import { regexWebsite } from "@middlewares/validation/regex/regexWebsite.middleware";

// controllers imported:
import { ChangeNameOperatorController } from "@operator/changeName/ChangeNameOperatorController";
import { ChangeWebsiteOperatorController } from "@operator/changeWebsite/ChangeWebsiteController";
import { CreateOperatorController } from "@operator/createOperator/CreateOperatorController";
import { DeleteOperatorController } from "@operator/deleteOperator/DeleteOperatorController";
import { FindAllOperatorsController } from "@operator/findAll/FindAllOperatorsController";
import { FindOperatorController } from "@operator/findOperator/findOperatorController";
import { GetOperatorOustideController } from "@operator/getOperatorOuside/GetOperatorOutsideController";

// route imports:
import { contactRoutes } from "./contact.routes";
import { loginRoutes } from "./login.routes";
import { planRoutes } from "./plan.routes";

// router definitions:
const operatorRoutes = Router();
operatorRoutes.use("/:id_operator/contact", operatorExistsId, contactRoutes);
operatorRoutes.use("/:id_operator/login", operatorExistsId, loginRoutes);
operatorRoutes.use("/:id_operator/plan", operatorExistsId, planRoutes);

// controller registration:
const createOperatorController = new CreateOperatorController();
const changeNameOperatorController = new ChangeNameOperatorController();
const findOperatorController = new FindOperatorController();
const findAllOperatorsController = new FindAllOperatorsController();
const changeWebsiteOperatorController = new ChangeWebsiteOperatorController();
const deleteOperatorController = new DeleteOperatorController();
const getOperatorOustideController = new GetOperatorOustideController();

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
  getLatitudeLongitude,
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
operatorRoutes.get("/findOperator/:id_operator", operatorExistsId, findOperatorController.handle);

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
 * @route GET /operator/getOperatorOutside/
 * @description Get operator outside the database
 * @access Private
 * @author Raphael Vaz
 */
operatorRoutes.get(
  "/getOperatorOutside/",
  providedCNPJ,
  regexCNPJ,
  getCnpjJaToken,
  getCnpjJaInfo,
  getLatitudeLongitude,
  getOperatorOustideController.handle,
);

// export module:
export { operatorRoutes };
