 interface BaseTaskDTO {
    id?: number
    title: string
    content: string
    done: any

}

 export interface TaskDTO extends BaseTaskDTO {
    id: number
    userId: number | null
    

}

 export interface CreateTaskDTO extends BaseTaskDTO {}

 export interface UpdateTaskDTO extends Partial<BaseTaskDTO> {}