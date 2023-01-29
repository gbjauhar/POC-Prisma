import { NextFunction, Request, Response } from "express"
import authorsModel from "../schemas/authors.schema.js"

export default function postAuthorValidation(req: Request, res: Response, next: NextFunction): Response{
    const { error } = authorsModel.validate(req.body, { abortEarly: false })
    if(error){
        const err = error.details.map(detail => detail.message)
        return res.status(422).send(err)
    }
    next()
}