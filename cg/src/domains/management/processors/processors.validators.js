const { celebrate, Joi } = require('celebrate');

const addProcessorValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .required()
      .max(255),
    logoUrl: Joi.string().max(255),
    description: Joi.string(),
    scopes: Joi.array().items(Joi.string()),
    address: Joi.string().regex(/^0x[\da-fA-F]{40}$/)
  })
});

const updateProcessorValidator = celebrate({
  body: Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().max(255),
    logoUrl: Joi.string().max(255),
    description: Joi.string(),
    scopes: Joi.array().items(Joi.string())
  })
});

const deleteProcessorValidator = celebrate({
  body: Joi.object().keys({
    processorIds: Joi.array()
      .items(Joi.number())
      .required()
  })
});

module.exports = {
  addProcessorValidator,
  updateProcessorValidator,
  deleteProcessorValidator
};
