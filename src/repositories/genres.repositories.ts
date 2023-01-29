import prisma from "../database/server.js"

export async function create(genre){
    return prisma.genres.create({data: genre})
}

export async function retrieve(){
    return prisma.genres.findMany()
}

export async function deleteById(id: number){
    return prisma.genres.delete({where: {id: id}})
}

export async function update(id: number, genre: string){
    return prisma.genres.update({where: {id: id}, data: {genre}})
}

const genresRepository = {
    create,
    retrieve,
    deleteById,
    update,
}

export default genresRepository