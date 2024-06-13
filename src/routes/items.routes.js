import { Router } from "express";
import {
  createItems,
  deleteItem,
  getItems,
  updateItem,
} from "../controllers/items.controller.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(createItems);
router.route("/get").get(getItems);
router.route("/update/:itemId").patch(updateItem);
router.route("/delete/:itemId").delete(deleteItem);

export default router;
