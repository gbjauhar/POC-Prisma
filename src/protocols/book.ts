export type BookEntity = {
    id: number,
    title: string,
    author: string,
    genre: string,
    status: string
}

export type Book = Omit<BookEntity, "id">

