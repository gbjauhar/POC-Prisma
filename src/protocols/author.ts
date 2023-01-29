export type AuthorEntity = {
    id: number,
    author: string
}

export type Author = Omit<AuthorEntity, "id">

