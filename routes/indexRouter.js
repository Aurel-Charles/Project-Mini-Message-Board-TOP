import { Router } from "express";
import { addMessage, deleteMessageById, getAllMessagesView, getFormView, getMessageView, validateMessage } from "../controller/indexController.js";


export const indexRouter = Router()


indexRouter.get("/", getAllMessagesView )
indexRouter.get("/new", getFormView)
indexRouter.post("/new",validateMessage, addMessage)
indexRouter.get("/:messageID" , getMessageView)
indexRouter.post("/:messageID/delete" , deleteMessageById)