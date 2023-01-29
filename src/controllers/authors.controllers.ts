import { Request, Response } from "express"
import authorsRepository from "../repositories/authors.repository.js"

export async function createAuthor(req: Request, res: Response): Promise<void> {
    try {
        await authorsRepository.create(req.body)
        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getAuthors(req: Request, res: Response): Promise<void> {
    try {
        const result = await authorsRepository.retrieve()
        res.send(result.map(value => value))
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function deleteAuthor(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    try {
        await authorsRepository.deleteById(Number(id))
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function updateByName(req: Request, res: Response): Promise<void> {
    const { id, authors } = req.params
    try {
        const teste = await authorsRepository.update(Number(id), authors)
        console.log(teste)
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}