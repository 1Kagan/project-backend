import { Module } from '@nestjs/common';
import { TaskTodoController } from './task-todo.controller';
import { TaskTodoService } from './task-todo.service';

@Module({
  controllers: [TaskTodoController],
  providers: [TaskTodoService]
})
export class TaskTodoModule {}
