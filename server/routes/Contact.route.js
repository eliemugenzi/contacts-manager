import { Router } from "express";
import ContactController from "../controllers/Contact.controller";
const router = Router();

router.get("/", ContactController.findAll);
router.post("/", ContactController.createNew);
router.patch("/:id/name", ContactController.updateName);
router.patch("/:id/phone", ContactController.updatePhone);
router.delete("/:id", ContactController.deleteContact);
router.get("/:id", ContactController.findOne);

export default router;
