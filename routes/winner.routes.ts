import { Router } from "express";

import WinnerController from "../controllers/winner.controller";

const router: Router = Router();

// GET 
router.route("/getAll").get(WinnerController.getAll);

//POST 
router.route("/createWinner").post(WinnerController.createWinner);

// PUT
router.route("/update").put(WinnerController.update);

export default router;
