import { Repository, EntityRepository } from "typeorm";
import { TaskEntity } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-task.dto";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
    async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
        const { title, description } = createTaskDto;

        const task = new TaskEntity();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        await task.save();

        return task;
    }
}
