import joi from 'joi'
import {CreateTaskDTO, UpdateTaskDTO} from '../dto/TaskDTO'

export const createTaskSchema: joi.ObjectSchema<CreateTaskDTO> = joi.object().keys({
     title: joi.string().required(),
     content: joi.string().required(),
     done: joi.boolean().required(),
})

export const updateTaskSchema: joi.ObjectSchema<UpdateTaskDTO> = joi.object().keys({
     title: joi.string(),
     content: joi.string(),
     done: joi.boolean(),
})