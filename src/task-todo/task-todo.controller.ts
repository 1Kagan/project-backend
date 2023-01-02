import { Controller, Get } from '@nestjs/common';
import { TaskTodoService } from './task-todo.service';


// http://localhost:3000/api/task-todos

@Controller( 'task-todos' )
export class TaskTodoController {


   constructor( private tasktodoService: TaskTodoService ) {}



  @Get()
  
  getAllTodos(){

    console.log(this.tasktodoService.getAllTodos());
  
  }
 
}
     
