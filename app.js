import express from 'express'
import { indexRouter } from './routes/indexRouter.js';
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { logger } from './middleware/logger.js';

const app = express()
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));

app.use(logger)
app.use("/" , indexRouter)

app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
  });
  