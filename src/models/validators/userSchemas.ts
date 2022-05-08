import joi from 'joi'


export const loginSchema = joi.object().keys({
    email: joi.string().required()

})

export const registerSchema = joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required()
})