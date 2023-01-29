import { Router } from "express"
import { createAuthor, deleteAuthor, getAuthors, updateByName } from "../controllers/authors.controllers.js"
import postAuthorValidation from "../middlewares/authors.middleware.js"

const router = Router()

router.post("/authors", postAuthorValidation, createAuthor)
router.get("/authors", getAuthors)
router.delete("/authors/:id", deleteAuthor)
router.put("/authors/:id/:authors", updateByName)

export default router