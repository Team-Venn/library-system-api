import Joi from "joi";

export const addBookValidator = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  genre: Joi.string().required(),
  publishedYear: Joi.string().required(),
});
