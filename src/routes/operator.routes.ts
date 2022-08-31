// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { operatorExistsCNPJ } from "@middlewares/validation/exists/cnpj/operatorExistsCNPJ.middleware";
import { operatorExistsId } from "@middlewares/validation/exists/id/operatorExistsId.middleware";
import { operatorExistsName } from "@middlewares/validation/exists/name/operatorExistsName.middleware";
import { providedOperator } from "@middlewares/validation/provided/providedOperator.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";
import { regexWebsite } from "@middlewares/validation/regex/regexWebsite.middleware";

// controllers imported:
import { ChangeNameController } from "@operator/changeName/ChangeNameController";
import { CreateOperatorController } from "@operator/createOperator/CreateOperatorController";
import { FindOperatorController } from "@operator/findOperator/findOperatorController";

// router definitions:
const operatorRoutes = Router();

// controller registration:
const createOperatorController = new CreateOperatorController();
const changeNameController = new ChangeNameController();
const findOperatorController = new FindOperatorController();

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
  changeNameController.handle,
);

operatorRoutes.get(
  "/findOperator/:id_operator",
  operatorExistsId,
  findOperatorController.handle,
);

// export module:
export { operatorRoutes };
