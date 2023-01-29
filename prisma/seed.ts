import prisma from "../src/database/server.js";

async function main(){
    await prisma.books.createMany({
        data:[
            {
                "title":"cem anos de solidão",
                "author_id":1,
                "genre_id":1,
                "status":"read"
            },
            {
                "title":"orgulho e preconceito",
                "author_id":2,
                "genre_id":2,
                "status":"unread"
            },
            {
                "title":"o morro dos ventos uivantes",
                "author_id":3,
                "genre_id":3,
                "status":"read"
            }
        ]
    })

    await prisma.authors.createMany({
        data:[
            {
                "id":1,
                "author":"gabo"
            },
            {
                "id":2,
                "author": "jane austen"
            },
            {
                "id": 3,
                "author":"emily bronte"
            },
        ]
    })

    await prisma.genres.createMany({
        data:[
            {
                "id": 1,
                "genre": "realismo mágico"
            },
            {
                "id": 2,
                "genre": "romance"
            },
            {
                "id":3,
                "genre": "drama"
            }
        ]
    })
}

main()
.then(() => {
    console.log("Registro feito com sucesso")
})
.catch((err) => {
    console.log(err)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})