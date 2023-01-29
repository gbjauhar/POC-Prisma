import Joi from "joi";

const bookModel = Joi.object({
    title: Joi.string().required(),
    author_id: Joi.number().required(),
    genre_id: Joi.number().required(),
    status: Joi.string().required()
})

export default bookModel