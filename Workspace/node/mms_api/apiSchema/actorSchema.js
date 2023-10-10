const Joi = require('@hapi/joi');

module.exports.createActorSchema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.string().required()
});

module.exports.getAllActorSchema = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string()
});

module.exports.updateActorSchema = Joi.object().keys({
    name: Joi.string(),
    age: Joi.number(),
    gender: Joi.string()
});
