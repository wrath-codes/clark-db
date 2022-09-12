// libraries imported:
import { Router } from "express";

// middlewares imported:
import { contractExistsId } from "@middlewares/validation/exists/id/contractExistsId.middleware";
import { operatorExistsId } from "@middlewares/validation/exists/id/operatorExistsId.middleware";
import { contractExistsNumber } from "@middlewares/validation/exists/number/contractExistsNumber.middleware";
import { providedContract } from "@middlewares/validation/provided/providedContract.middleware";
import { validContractDate } from "@middlewares/validation/valid/contract/validContractDate.middleware";
import { validContractStatusNotCancelado } from "@middlewares/validation/valid/contract/validContractStatusNotCancelado.middleware";
import { validContractStatusValido } from "@middlewares/validation/valid/contract/validContractStatusValido.middleware";

// controllers imported:
import { CancelContractController } from "@contract/cancelContract/CancelContractController";
import { CreateContractController } from "@contract/createContract/CreateContractController";
import { EndContractController } from "@contract/endContract/EndContractController";
import { FindAllContractsEmployerController } from "@contract/findAll/FindAllContractsEmployerController";
import { FindContractController } from "@contract/findContract/FindContractController";
import { FindInvalidContractsEmployerController } from "@contract/findInvalid/FindInvalidContractsEmployerController";
import { FindValidContractEmployerController } from "@contract/findValid/FindValidContractsEmployerController";

import { FindAgreementsContractController } from "@agreement/findAgreements/FindAgreementsContractController";

// route imports:
import { agreementRoutes } from "./agreement/agreement.routes";

// controller registration:
const createContractController = new CreateContractController();
const cancelContractController = new CancelContractController();
const endContractController = new EndContractController();
const findAllContractsEmployerController = new FindAllContractsEmployerController();
const findValidContractsEmployerController = new FindValidContractEmployerController();
const findInvalidContractsEmployerController = new FindInvalidContractsEmployerController();
const findContractController = new FindContractController();
const findAgreementsContractController = new FindAgreementsContractController();

// route definitions:
const contractRoutes = Router({ mergeParams: true });
contractRoutes.use("/:id_contract/agreement", contractExistsId, agreementRoutes);

// routes
/**
 * @route POST /employer/:id_employer/contract/createContract/:id_operator
 * @description Create a contract
 * @access Private
 * @author Raphael Vaz
 */
contractRoutes.post(
  "/createContract/:id_operator",
  providedContract,
  validContractDate,
  operatorExistsId,
  contractExistsNumber,
  createContractController.handle,
);

/**
 * @route PATCH /employer/:id_employer/contract/cancelContract/{id_contract}
 * @description Cancel a contract
 * @access Private
 * @author Raphael Vaz
 */
contractRoutes.patch(
  "/:id_contract/cancelContract",
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
contractRoutes.patch(
  "/:id_contract/endContract",
  contractExistsId,
  validContractStatusValido,
  validContractStatusNotCancelado,
  endContractController.handle,
);

/**
 * @route GET /employer/:id_employer/contract/findAllContracts
 * @description Find all contracts of an employer
 * @access Private
 * @author Raphael Vaz
 */
contractRoutes.get("/findAllContracts", findAllContractsEmployerController.handle);

/**
 * @route GET /employer/:id_employer/contract/findValidContracts
 * @description Find all valid contracts of an employer
 * @access Private
 * @author Raphael Vaz
 */
contractRoutes.get("/findValidContracts", findValidContractsEmployerController.handle);

/**
 * @route GET /employer/:id_employer/contract/findInvalidContracts
 * @description Find all invalid contracts of an employer
 * @access Private
 * @author Raphael Vaz
 */
contractRoutes.get("/findInvalidContracts", findInvalidContractsEmployerController.handle);

/**
 * @route GET /employer/:id_employer/findContract/:id_contract
 * @description Find a contract of an employer
 * @access Private
 * @author Raphael Vaz
 */
contractRoutes.get("/:id_contract/findContract", contractExistsId, findContractController.handle);

contractRoutes.get(
  "/:id_contract/findAgreements",
  contractExistsId,
  findAgreementsContractController.handle,
);

export { contractRoutes };
