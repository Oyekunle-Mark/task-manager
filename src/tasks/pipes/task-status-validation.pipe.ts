import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ];

    transform(value: any) {
        value = value.toUpperCase();

        if (!this.isValidStatus(value)) {
            throw new BadRequestException(`"${value}" is an invalid status`);
        }

        return value;
    }

    private isValidStatus(status: any): boolean {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}
