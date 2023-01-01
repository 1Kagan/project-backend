import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskTodoModule } from './task-todo/task-todo.module';

@Module({
  imports: [TaskTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
