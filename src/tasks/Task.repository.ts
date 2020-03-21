import { Repository, EntityRepository } from "typeorm";
import { TaskEntity } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
    async getTasks(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');

        const tasks = await query.getMany();
        return tasks;
    }

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
