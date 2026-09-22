import { body, validationResult} from "express-validator";
import * as db from "../db/queries.js";
import { HttpError } from "../errors/HttpError.js";


// views
export async function getAllMessagesView(req, res, next,) {
    try {
        const messages = await db.getMessages()
        res.render("homeView", { title: "Mini Messageboard", messages: messages})
    } catch (error) {
      next(error)  
    }
}

export function getFormView(req, res, next) {
    res.render('form')
}

export async function getMessageView(req, res, next) {
    try {
        const message = await db.getMessageById(Number(req.params.messageID))
        if (!message) {
            return next(new HttpError("Can't find the message", 404))
        }
        res.render("messageView", {title: "Message Detail" , message: message} )
    } catch (error) {
        next(error)
    }
}


// logic

export const validateMessage = [
    body("username")
      .trim()
      .notEmpty().withMessage("Username is required")
      .isLength({ max: 10 }).withMessage("Username is too long (10 characters max)"),
    body("text")
      .trim()
      .notEmpty().withMessage("Message is required")
      .isLength({ max: 500 }).withMessage("Message is too long (500 characters max)"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new HttpError(errors.array()[0].msg, 400));
      }
      next();
    }
  ];

export async function addMessage(req, res, next) {
    const newMessage = {text: req.body.text, username: req.body.username}
    try {
        await db.addMessageToDb(newMessage)
        console.log( "New message send:" , newMessage);
        res.redirect("/")
    } catch (error) {
        next(error)
    }
}


export async function deleteMessageById(req, res, next) {
    try {
        await db.deleteMessage(req.params.messageID)
        res.redirect("/")
    } catch (error) {
        next(error)
    }
}