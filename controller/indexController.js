import { HttpError } from "../errors/HttpError.js";
import { messages } from "../routes/indexRouter.js";

// views
export function getAllMessagesView(req, res, next,) {
    res.render("homeView", { title: "Mini Messageboard", messages: messages})
}

export function getFormView(req, res, next) {
    res.render('form')
}

export function getMessageView(req, res, next) {
    const message = messages.find(m => m.id === req.params.messageID);
    if (!message) {
       return next(new HttpError("Can't find the message", 404))
    }
    res.render("messageView", {title: "Message Detail" , message: message} )
}


// logic

export function validateMessage(req, res, next) {
    if (!req.body.text || !req.body.user) {
        return next(new HttpError("Missing User or message", 400))
    }
    next()
}

export function addMessage(req, res, next) {
    try {
        const newMessage = {id: crypto.randomUUID(), text: req.body.text, user: req.body.user, added: new Date()}
        console.log( "New message send:" , newMessage);
        messages.push(newMessage)
        res.redirect("/")
    } catch (error) {
        next(error)
    }
}