import { Router } from "express";

import TicketController from "../controllers/ticket.controllers";

const router: Router = Router();

// GET 
router.route("/getAll").get(TicketController.getAll);
router.route("/getOneById").get(TicketController.getOneById);

// POST
router.route("/createLottery").post(TicketController.createLottery);
router.route("/create").post(TicketController.create);
router.route("/getOneByNumber").post(TicketController.getOneByNumber);

// PUT
router.route("/update/:id").put(TicketController.update);
router.route("/changeState").put(TicketController.changeState);

// DELETE
router.route("/delete").delete(TicketController.delete);

export default router;
