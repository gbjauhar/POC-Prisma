import { NextFunction, Request, Response } from "express"
import genresModel from "../schemas/genres.schema.js"

export default function postAuthorValidation(req: Request, res: Response, next: NextFunction): Response{
    const { error } = genresModel.validate(req.body, { abortEarly: false })
    if(error){
        const err = error.details.map(detail => detail.message)
        return res.status(422).send(err)
    }
    next()
}