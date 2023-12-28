import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }
  @Post()
  addTodo(@Body('task') task: string) {
    this.todoService.addTodo(task);
  }
  @Put('/:id')
  updateTodoById(
    @Param('id') id: string,
    @Body('new_task') newTask: string,
    @Body('isComplete') isComplete: boolean,
  ) {
    this.todoService.updateTodoById(id, newTask, isComplete);
  }
  @Delete('/:id')
  removeTodoById(@Param('id') id: string) {
    this.todoService.removeTodoById(id);
  }
}
