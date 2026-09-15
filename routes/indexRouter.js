import { Router } from "express";
import { addMessage, getAllMessagesView, getFormView, getMessageView, validateMessage } from "../controller/indexController.js";

export const messages = [
    {
      id: crypto.randomUUID(),
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: crypto.randomUUID(), 
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

export const indexRouter = Router()


indexRouter.get("/", getAllMessagesView )
indexRouter.get("/new", getFormView)
indexRouter.post("/new",validateMessage, addMessage)
indexRouter.get("/:messageID" , getMessageView)