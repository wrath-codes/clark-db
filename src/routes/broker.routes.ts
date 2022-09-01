// libraries imported:
import { Router } from "express";

// middlewares imported:
import { getCnpjJaInfo } from "@middlewares/externalAPI/CnpjJa/getCnpjJaInfo.middleware";
import { getCnpjJaToken } from "@middlewares/externalAPI/CnpjJa/getCnpjJaToken.middleware";
import { brokerExistsCNPJ } from "@middlewares/validation/exists/cnpj/brokerExistsCNPJ.middleware";
import { brokerExistsId } from "@middlewares/validation/exists/id/brokerExistsId.middleware";
import { brokerExistsName } from "@middlewares/validation/exists/name/brokerExistsName.middleware";
import { providedCNPJ } from "@middlewares/validation/provided/providedCNPJ.middleware";
import { regexCNPJ } from "@middlewares/validation/regex/regexCNPJ.middleware";

// controllers imported:
import { ChangeNameBrokerController } from "@broker/changeName/ChangeNameBrokerController";
import { CreateBrokerController } from "@broker/createBroker/CreateBrokerController";
import { DeleteBrokerController } from "@broker/deleteBroker/DeleteBrokerController";
import { FindAllBrokersController } from "@broker/findAll/FindAllBrokersController";
import { FindBrokerController } from "@broker/findBroker/FindBrokerController";
import { ListAssignedEmployersController } from "@broker/listAssignedEmployers/ListAssignedEmployersController";

// router definitions:
const brokerRoutes = Router();

// controller registration:
const createBrokerController = new CreateBrokerController();
const changeNameBrokerController = new ChangeNameBrokerController();
const findBrokerController = new FindBrokerController();
const findAllBrokersControllers = new FindAllBrokersController();
const deleteBrokerController = new DeleteBrokerController();
const listAssignedEmployersController = new ListAssignedEmployersController();

// routes definitions:
/**
 * @route POST /broker/createBroker
 * @description Create a broker
 * @access Private
 * @author Raphael Vaz
 */
brokerRoutes.post(
  "/createBroker",
  providedCNPJ,
  regexCNPJ,
  brokerExistsCNPJ,
  getCnpjJaToken,
  getCnpjJaInfo,
  createBrokerController.handle,
);

/**
 * @route PUT /broker/changeName/{id_broker}
 * @description Change the name of a broker
 * @access Private
 * @author Raphael Vaz
 */
brokerRoutes.put(
  "/changeName/:id_broker",
  brokerExistsId,
  brokerExistsName,
  changeNameBrokerController.handle,
);

/**
 * @route GET /broker/findBroker/{id_broker}
 * @description Find a broker
 * @access Private
 * @author Raphael Vaz
 */
brokerRoutes.get(
  "/findBroker/:id_broker",
  brokerExistsId,
  findBrokerController.handle,
);

/**
 * @route GET /broker/findAll
 * @description Find all brokers
 * @access Private
 * @author Raphael Vaz
 */
brokerRoutes.get("/findAll", findAllBrokersControllers.handle);

/**
 * @route DELETE /broker/deleteBroker/{id_broker}
 * @description Delete a broker
 * @access Private
 * @author Raphael Vaz
 */
brokerRoutes.delete(
  "/deleteBroker/:id_broker",
  brokerExistsId,
  deleteBrokerController.handle,
);

/**
 * @route GET /broker/listEmployers/{id_broker}
 * @description List all employers assigned to a broker
 * @access Private
 * @author Raphael Vaz
 */
brokerRoutes.get(
  "/listEmployers/:id_broker",
  brokerExistsId,
  listAssignedEmployersController.handle,
);

// export module:
export { brokerRoutes };
