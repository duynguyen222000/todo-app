import { add_task, status_task } from "../type/type";

export const addTaskToDo = (newTask) => ({
  type: add_task,
  newTask,
});

export const changeStatusTask = (taskId) => ({
  type: status_task,
  taskId,
});
