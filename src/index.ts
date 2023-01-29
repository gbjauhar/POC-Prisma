import express from "express"
import booksRouter from "./routes/books.routes.js"
import authorsRouter from "./routes/authors.routes.js"
import genresRouter from "./routes/genres.routes.js"

const app = express();
app.use(express.json())
app.use(booksRouter)
app.use(authorsRouter)
app.use(genresRouter)

  app.listen(4000, () =>
  console.log(`Server running in port: 4000`)
);