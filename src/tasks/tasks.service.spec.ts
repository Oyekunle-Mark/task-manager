import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';

const mockTaskRepository = () => ({

})

describe('TasksService', () => {
    let tasksService;
    let taskRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                TasksService,
            ]
        }).compile();

        tasksService = await module.get<TasksService>(TasksService);
    });
});
