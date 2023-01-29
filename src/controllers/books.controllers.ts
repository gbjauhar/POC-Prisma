import { Book } from './../protocols/book.js';
import { Request, Response } from "express"
import booksRepository from "../repositories/books.repository.js"

export async function createBook(req: Request, res: Response): Promise<void> {
    try {
        await booksRepository.create(req.body)
        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getBooks(req: Request, res: Response): Promise<void> {
    try {
        const result = await booksRepository.retrieve()
        res.send(result.map(value => value))
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getByStatus(req: Request, res: Response): Promise<void> {
    const { status } = req.query
    try {
        const result = await booksRepository.retrieveByStatus(status.toString())
        res.send(result.map(value => value))
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function deleteBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    try {
        await booksRepository.deleteById(Number(id))
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function updateByStatus(req: Request, res: Response): Promise<void> {
    const { id, status } = req.params
    try {
        const teste = await booksRepository.update(Number(id), status)
        console.log(teste)
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}