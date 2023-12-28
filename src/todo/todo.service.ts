import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { getData, writeData } from 'database/dbFunction';

@Injectable()
export class TodoService {
  getTodos() {
    const data = getData();
    return data;
  }

  addTodo(task: string) {
    let todos = JSON.parse(getData());
    if (task === undefined) {
      return;
    }
    const todo = new Todo();
    todo.id = uuidv4();
    todo.isComplete = false;
    todo.task = task;
    todos.push(todo);
    writeData(todos);
  }
  updateTodoById(id: string, newTask: string, isComplete: boolean) {
    let todos = JSON.parse(getData());

    const todoIndex = todos.findIndex((item: Todo) => item.id === id);
    if (todoIndex != -1) {
      if (newTask === undefined) {
        todos[todoIndex].task = '';
      } else {
        todos[todoIndex].task = newTask;
      }
      todos[todoIndex].isComplete = isComplete;
    } else {
      throw new NotFoundException(`There is not id: ${id}`);
    }
    writeData(todos);
  }
  removeTodoById(id: string) {
    let todos = JSON.parse(getData());
    const Found = todos.find((item: Todo) => item.id === id);
    if (!Found) {
      throw new NotFoundException(`There is not id: ${id}`);
    }
    todos = todos.filter((item: Todo) => item.id !== id);
    writeData(todos);
  }
}
