// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { operatorExistsCNPJ } from "@middlewares/validation/exists/cnpj/operatorExistsCNPJ.middleware";
import { operatorExistsId } from "@middlewares/validation/exists/id/operatorExistsId.middleware";
import { operatorExistsName } from "@middlewares/validation/exists/name/operatorExistsName.middleware";
import { operatorExistsWebsite } from "@middlewares/validation/exists/website/operatorExistsWebsite.middleware";
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

// router definitions:
const operatorRoutes = Router();

// controller registration:
const createOperatorController = new CreateOperatorController();
const changeNameOperatorController = new ChangeNameOperatorController();
const findOperatorController = new FindOperatorController();
const findAllOperatorsController = new FindAllOperatorsController();
const changeWebsiteOperatorController = new ChangeWebsiteOperatorController();
const deleteOperatorController = new DeleteOperatorController();

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

operatorRoutes.delete(
  "/deleteOperator/:id_operator",
  operatorExistsId,
  deleteOperatorController.handle,
);

// export module:
export { operatorRoutes };
