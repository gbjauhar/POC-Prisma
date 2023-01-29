export type BookEntity = {
    id: number,
    title: string,
    author_id: number,
    genre_id: number,
    status: string
}

export type Book = Omit<BookEntity, "id">

