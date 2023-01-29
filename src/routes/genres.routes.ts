import { Router } from "express"
import { createGenre, deleteGenres, getGenres, updateByName } from "../controllers/genres.controllers.js"
import postGenreValidation from "../middlewares/genres.middleware.js"

const router = Router()

router.post("/genres", postGenreValidation, createGenre)
router.get("/genres", getGenres)
router.delete("/genres/:id", deleteGenres)
router.put("/genres/:id/:genre", updateByName)

export default router