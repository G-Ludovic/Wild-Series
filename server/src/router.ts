import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import programActions from "./modules/program/programActions";
import welcomeActions from "./modules/welcome/welcomeActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Declaration of a "Welcome" route
router.get("/", welcomeActions.theWelcome);

/* ************************************************************************* */

router.get("/api/programs", programActions.browse);

export default router;
