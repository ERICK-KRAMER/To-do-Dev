import { ContainerItem } from "./container-item";
import { Date } from "./date";
import { Difficult } from "./difficult-item";
import { Task as TaskItem } from "./task";
import { TodoItem } from "./todo-Item";
import { User } from "./user";
import { WhereTask } from "./where-task";

const Task = {
  Root: ContainerItem,
  Date: Date,
  Difficult: Difficult,
  Task: TaskItem,
  User: User,
  Where: WhereTask,
  Todo: TodoItem
}

export { Task };