import express from "express";
import * as bookController from "../Controllers/book.controller.js";

const router = express.Router();

router.post("/add", bookController.add);
router.get("/show", bookController.showAll);
router.put("/update/:id", bookController.modification);
router.delete("/delete/:id", bookController.suppression);

export default router;
