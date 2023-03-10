import { NextFunction, Request, Response } from "express"
import bookModel from "../schemas/books.schemas.js"

export default function postBookValidation(req: Request, res: Response, next: NextFunction): Response{
    const { error } = bookModel.validate(req.body, { abortEarly: false })
    if(error){
        const err = error.details.map(detail => detail.message)
        return res.status(422).send(err)
    }
    next()
}