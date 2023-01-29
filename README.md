# POC-Typescript
A simple project using Node, Express and Typescript where you can make a catalog of all your read and unread books

POST: /books
Body: { "title": "Crime and Punishment", "genre_id": 1, "author_id": 1, "status": "read" }

GET: /books

GET: /books/status?status=unread

PUT: /books/:id/:status

DELETE: /books/:id


POST: /authors
Body: { "author": "Dostoevsky" }

GET: /authors

PUT: /books/:id/:author

DELETE: /books/:id



POST: /genres
Body: { "genres": "drama" }

GET: /genres

PUT: /genres/:id/:genre

DELETE: /genres/:id
