import { Router } from "express";

// libraries imported:

// middlewares imported:
import { beneficiaryExistsCpf } from "@middlewares/validation/exists/cpf/beneficiaryExistsCpf.middleware";
import { titularExistsCpf } from "@middlewares/validation/exists/cpf/titularExistsCpf.middleware";
import { agreementExistsId } from "@middlewares/validation/exists/id/agreementExistsId.middleware";
import { beneficiaryExistsId } from "@middlewares/validation/exists/id/beneficiaryExistsId.middleware";
import { providedBeneficiary } from "@middlewares/validation/provided/providedBeneficiary.middleware";
import { providedCpfTitular } from "@middlewares/validation/provided/providedCpfTitular.middleware";
import { regexEmail } from "@middlewares/validation/regex/regexEmail.middleware";
import { regexPhone } from "@middlewares/validation/regex/regexPhone.middleware";
import { validBeneficiaryAlreadyTitular } from "@middlewares/validation/valid/beneficiary/validBeneficiaryAlreadyTitular.middleware";
import { validBeneficiaryHasAgreement } from "@middlewares/validation/valid/beneficiary/validBeneficiaryHasAgreement.middleware";
import { validBeneficiaryHasEmployer } from "@middlewares/validation/valid/beneficiary/validBeneficiaryHasEmployer.middleware";

// controllers imported:
import { AddToAgreementBeneficiaryController } from "@beneficiary/addToAgreement/AddToAgreementBeneficiaryController";
import { BasicInfoBeneficiaryController } from "@beneficiary/basicInfo/BasicInfoBeneficiaryController";
import { ChangeFamilyBeneficiaryController } from "@beneficiary/changeFamily/ChangeFamilyBeneficiaryController";
import { CreateBeneficiaryController } from "@beneficiary/createBeneficiary/CreateBeneficiaryController";
import { DeleteBeneficiaryController } from "@beneficiary/deleteBeneficiary/DeleteBeneficiaryController";
import { FireBeneficiaryController } from "@beneficiary/fireBeneficiary/FireBeneficiaryController";
import { FullInfoBeneficiaryController } from "@beneficiary/fullInfo/FullInfoBeneficiaryController";
import { ListHistoryBeneficiaryController } from "@beneficiary/listHistory/ListHistoryBeneficiaryController";
import { RemoveOfAgreementBeneficiaryController } from "@beneficiary/removeOfAgreement/RemoveOfAgreementBeneficiaryController";
import { TurnTitularBeneficiaryController } from "@beneficiary/turnTitular/TurnTitularBeneficiaryController";

// controller registration:
const createBeneficiaryController = new CreateBeneficiaryController();
const deleteBeneficiaryController = new DeleteBeneficiaryController();
const turnTitularBeneficiaryController = new TurnTitularBeneficiaryController();
const changeFamilyBeneficiaryController = new ChangeFamilyBeneficiaryController();
const addToAgreementBeneficiaryController = new AddToAgreementBeneficiaryController();
const removeOfAgreementBeneficiaryController = new RemoveOfAgreementBeneficiaryController();
const fireBeneficiaryController = new FireBeneficiaryController();
const basicInfoBeneficiaryController = new BasicInfoBeneficiaryController();
const fullInfoBeneficiaryController = new FullInfoBeneficiaryController();
const listHistoryBeneficiaryController = new ListHistoryBeneficiaryController();

// route definitions:
const beneficiaryRoutes = Router({ mergeParams: true });

// routes
/**
 * @route POST /beneficiary/createBeneficiary
 * @description Create a new beneficiary
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.post(
  "/createBeneficiary",
  providedBeneficiary,
  providedCpfTitular,
  regexEmail,
  regexPhone,
  beneficiaryExistsCpf,
  titularExistsCpf,
  createBeneficiaryController.handle,
);

/**
 * @route DELETE /beneficiary/:id_beneficiary/deleteBeneficiary
 * @description Delete a beneficiary
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.delete(
  "/:id_beneficiary/deleteBeneficiary",
  beneficiaryExistsId,
  deleteBeneficiaryController.handle,
);

/**
 * @route PUT /beneficiary/:id_beneficiary/turnTitular
 * @description Turn a beneficiary into a titular
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.put(
  "/:id_beneficiary/turnTitular",
  beneficiaryExistsId,
  validBeneficiaryAlreadyTitular,
  turnTitularBeneficiaryController.handle,
);

/**
 * @route PUT /beneficiary/:id_beneficiary/changeFamily
 * @description Change the family of a beneficiary
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.put(
  "/:id_beneficiary/changeFamily",
  beneficiaryExistsId,
  titularExistsCpf,
  validBeneficiaryAlreadyTitular,
  changeFamilyBeneficiaryController.handle,
);

/**
 * @route PUT /beneficiary/:id_beneficiary/addToAgreement/:id_agreement
 * @description Add a beneficiary to an agreement
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.put(
  "/:id_beneficiary/addToAgreement/:id_agreement",
  beneficiaryExistsId,
  agreementExistsId,
  addToAgreementBeneficiaryController.handle,
);

/**
 * @route PUT /beneficiary/:id_beneficiary/removeOfAgreement
 * @description Remove a beneficiary from an agreement
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.put(
  "/:id_beneficiary/removeOfAgreement",
  beneficiaryExistsId,
  validBeneficiaryHasAgreement,
  removeOfAgreementBeneficiaryController.handle,
);

/**
 * @route PUT /beneficiary/:id_beneficiary/fireBeneficiary
 * @description Fire a beneficiary
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.put(
  "/:id_beneficiary/fireBeneficiary",
  beneficiaryExistsId,
  validBeneficiaryHasEmployer,
  fireBeneficiaryController.handle,
);

/**
 * @route GET /beneficiary/:id_beneficiary/basicInfo
 * @description Get the basic info of a beneficiary
 * @access Private
 * @author Raphael Vaz
 */
beneficiaryRoutes.get(
  "/:id_beneficiary/basicInfo",
  beneficiaryExistsId,
  basicInfoBeneficiaryController.handle,
);

/**
 * @route GET /beneficiary/:id_beneficiary/fullInfo
 * @description Get the full info of a beneficiary
 * @access Private
 * @author Raphael Vaz
 */

beneficiaryRoutes.get(
  "/:id_beneficiary/fullInfo",
  beneficiaryExistsId,
  fullInfoBeneficiaryController.handle,
);

/**
 * @route GET /beneficiary/:id_beneficiary/listHistory
 * @description List the history of a beneficiary
 * @access Private
 * @author Raphael Vaz
 */

beneficiaryRoutes.get(
  "/:id_beneficiary/listHistory",
  beneficiaryExistsId,
  listHistoryBeneficiaryController.handle,
);

// export route:
export { beneficiaryRoutes };
