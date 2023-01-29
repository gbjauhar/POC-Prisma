import Joi from "joi";

const authorModel = Joi.object({
    author: Joi.string().required()
})

export default authorModel