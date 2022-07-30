import {
  add_task,
  change_theme,
  remove_task,
  status_task,
  update_task,
} from "../type/type";

export const addTaskToDo = (newTask) => ({
  type: add_task,
  newTask,
});

export const changeStatusTask = (taskId) => ({
  type: status_task,
  taskId,
});

export const removeTask = (taskId) => ({
  type: remove_task,
  taskId,
});

export const updateTask = (task, idTask) => ({
  type: update_task,
  task,
  idTask,
});

export const changeTheme = (value) => ({
  type: change_theme,
  value,
});
