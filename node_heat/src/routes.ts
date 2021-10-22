import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3LastMessagesService } from "./services/Get3LastMessagesService";
import { Get3LastMessagesController } from "./controllers/Get3LastMessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";

const router = Router();
router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);
export { router }