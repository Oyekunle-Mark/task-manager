import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    createTask(title: string, description: string) {
        const task: Task = {
            title,
            description,
            status: TaskStatus.OPEN,
        }
    }
}
