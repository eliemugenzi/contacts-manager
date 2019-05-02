import { Router } from "express";

import Validate from "../middleware/Validate.middleware";
import ContactController from "../controllers/Contact.controller";
const router = Router();

router.get("/", ContactController.findAll);
router.post("/", Validate.validateContact, ContactController.createNew);
router.patch("/:id/name", Validate.ValidateName, ContactController.updateName);
router.patch(
  "/:id/phone",
  Validate.validatePhone,
  ContactController.updatePhone
);
router.delete("/:id", ContactController.deleteContact);
router.get("/search", ContactController.searchContact);
router.get("/:id", ContactController.findOne);

export default router;
