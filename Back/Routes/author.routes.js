import express from "express";
import * as authorController from "../Controllers/author.controller.js";

const router = express.Router();

router.post("/add", authorController.add);
router.get("/show", authorController.showAll);
// router.put("/update/:id", authorController.modification);
// router.delete("/delete/:id", authorController.suppression);

export default router;
