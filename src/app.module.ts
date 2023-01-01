import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskTodoModule } from './task-todo/task-todo.module';


@Module({
  imports: [TaskTodoModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
