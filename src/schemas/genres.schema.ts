import Joi from "joi";

const genreModel = Joi.object({
    genre: Joi.string().required()
})

export default genreModel