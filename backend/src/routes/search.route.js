import { Router } from "express";
import { getSearchResponses } from "../controllers/getSearchResponses.controller.js";

const router = Router();

router.get("/", (_, res) => {
    res.send("Application is live now ❤️!!!");
});

router.get("/:query", getSearchResponses);

export default router;
