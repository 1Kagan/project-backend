import { Controller, Get } from '@nestjs/common';


// http://localhost:3000/todos

@Controller( 'todos' )
export class TaskTodoController {

  @Get()
  
  getAllTodos(){
   
    return[ 'Todo1','Todo2'];
  }
   

}


