import prisma from "../database/server.js"
import { Author } from "../protocols/author.js"

export async function create(author: Author){
    return prisma.authors.create({data: author})
}

export async function retrieve(){
    return prisma.authors.findMany()
}

export async function deleteById(id: number){
    return prisma.authors.delete({where: {id: id}})
}

export async function update(id: number, author: string){
    return prisma.authors.update({where: {id: id}, data: {author}})
}

const authorsRepository = {
    create,
    retrieve,
    deleteById,
    update,
}

export default authorsRepository