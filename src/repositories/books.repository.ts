import { Book } from './../protocols/book';
import  prisma from "../database/server.js"

export async function create(book: Book){
    return prisma.books.create({
        data: book
    })
}

export async function retrieve(){
    return prisma.books.findMany()
}

export async function deleteById(id: number){
    return prisma.books.delete({where: {id: id}})
}

export async function retrieveByStatus(status: string){
    return prisma.books.findMany({where: {status: status}})
}

export async function update(id: number, status: string){
    return prisma.books.update({where: {id: id}, data: {status: status}})
}

const booksRepository = {
    create,
    retrieve,
    retrieveByStatus,
    deleteById,
    update,
}

export default booksRepository;