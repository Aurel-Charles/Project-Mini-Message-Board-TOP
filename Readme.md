# Mini Message Board

A simple message board built with **Express** and **EJS**, completed as part of [The Odin Project's Node.js path](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).

Users can view a list of posted messages, submit a new message through a form, and open a message to see its full detail page.

## Features

- **View all messages** — home page lists every message with its author, date, and text.
- **Post a new message** — a form (`/new`) lets you submit an author name and message text.
- **Message detail page** (bonus feature) — each message has an "OPEN" link/button leading to its own page at `/:messageID`.
- Server-side validation of the submission form (empty author/text is rejected).
- Centralized error handling via a custom `HttpError` class (e.g. 404 when a message id doesn't exist).
- Request logging middleware (method, URL, and timestamp for every request).

## Tech stack

- [Express](https://expressjs.com/) — web server and routing
- [EJS](https://ejs.co/) — server-side templating
- Vanilla CSS (CSS Grid, including `subgrid` for column alignment across message cards)
- Node.js ES Modules (`import`/`export`)

> Messages are stored in memory (a plain JS array) — no database. Restarting the server resets the message list.

## Project structure

```
.
├── app.js                      # Server entry point, middleware & view engine setup
├── controller/
│   └── indexController.js      # Route handlers (views + form logic)
├── errors/
│   └── HttpError.js            # Custom error class
├── middleware/
│   └── logger.js               # Request logger middleware
├── routes/
│   └── indexRouter.js          # Route definitions + in-memory messages array
├── views/
│   ├── partials/
│   │   └── head.ejs
│   ├── homeView.ejs            # Message list
│   ├── messageView.ejs         # Single message detail page
│   └── form.ejs                # New message form
└── public/
    └── style.css
```

## Routes

| Method | Path            | Description                          |
|--------|-----------------|---------------------------------------|
| GET    | `/`             | List all messages                     |
| GET    | `/new`          | Show the "new message" form           |
| POST   | `/new`          | Submit a new message, redirects to `/`|
| GET    | `/:messageID`   | Show a single message's detail page   |

## Getting started

```bash
# install dependencies
npm install

# start the server
node app.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## What I practiced

- Setting up an Express app with the EJS view engine
- Serving static assets with `express.static`
- Parsing form data with `express.urlencoded`
- Writing and chaining custom middleware (logging, validation, error handling)
- Building layouts with CSS Grid, including `subgrid` to keep columns aligned across independently-rendered cards
- Debugging common EJS pitfalls (`<% %>` vs `<%= %>`, HTML inside scriptlet tags)

## Credits

Exercise from [The Odin Project — Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).