import { Request, Response } from "express"
import genresRepository from "../repositories/genres.repositories.js"

export async function createGenre(req: Request, res: Response): Promise<void> {
    try {
        await genresRepository.create(req.body)
        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getGenres(req: Request, res: Response): Promise<void> {
    try {
        const result = await genresRepository.retrieve()
        res.send(result.map(value => value))
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function deleteGenres(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    try {
        await genresRepository.deleteById(Number(id))
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function updateByName(req: Request, res: Response): Promise<void> {
    const { id, genre } = req.params
    try {
        const teste = await genresRepository.update(Number(id), genre)
        console.log(teste)
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}