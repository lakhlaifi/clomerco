const Joi = require('@hapi/joi');

const categoryValidationSchema = Joi.object({
  id: Joi.string().guid().required(),
  version: Joi.number().integer().min(1).required(),
  name: Joi.object().pattern(
    Joi.string(), // key pattern (language code)
    Joi.string().min(1).max(255) // value pattern (name)
  ).required(),
  slug: Joi.object().pattern(
    Joi.string(), // key pattern (language code)
    Joi.string().min(1).max(255) // value pattern (slug)
  ).required(),
  parent: Joi.object({
    typeId: Joi.string().valid('category').required(),
    id: Joi.string().guid().required()
  }).optional(),
  ancestors: Joi.array().items(Joi.string().guid()).optional(),
  orderHint: Joi.string().optional(),
  createdAt: Joi.date().iso().required(),
  lastModifiedAt: Joi.date().iso().required()
});

module.exports = {
  validateCategory: (data) => {
    return categoryValidationSchema.validate(data);
  }
};
