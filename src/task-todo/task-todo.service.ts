import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TaskTodoService {

   
    getAllTodos(){
   
        return[ 'Todo1','Todo2','Todo3'];
      }


}
