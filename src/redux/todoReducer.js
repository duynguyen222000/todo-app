import {
  add_task,
  change_theme,
  remove_task,
  status_task,
  update_task,
} from "./type/type";
import { Theme } from "../theme/Theme";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { ToDoListDarkTheme } from "../theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../theme/ToDoListPrimaryTheme";
const initialState = {
  listToDo: [],
  currentTheme: ToDoListDarkTheme,
};

export default (state = initialState, action) => {
  let index = state.listToDo.findIndex((task) => task.id == action.taskId);

  switch (action.type) {
    case add_task:
      // check value nhâp vào rỗng
      if (action.newTask.taskName.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Fail...",
          text: "Input field is empty",
        });
        return { ...state };
      }
      //check task có tồn tại trong listToDo không ?
      let checkTask = state.listToDo.findIndex(
        (task) => task.taskName == action.newTask.taskName
      );
      if (checkTask !== -1) {
        Swal.fire({
          icon: "error",
          title: "Fail...",
          text: "Task already exists",
        });
        return { ...state };
      }
      // push task mới vào list todo
      state.listToDo = [...state.listToDo, action.newTask];
      return { ...state };
    case status_task:
      console.log(index);
      if (index !== -1) {
        state.listToDo[index].status = true;
      }
      Swal.fire({
        icon: "success",
        title: "Task " + state.listToDo[index].taskName + " completed",
        text: "Task completed!",
      });
      state.listToDo = [...state.listToDo];
      return { ...state };
    case remove_task:
      let newList = [...state.listToDo];
      if (index !== -1) {
        newList.splice(index, 1);
      }
      state.listToDo = newList;
      return { ...state };
    case update_task:
      let findTask = state.listToDo.findIndex(
        (task) => task.id == action.idTask
      );
      console.log(findTask);
      if (findTask !== -1) {
        state.listToDo[findTask].taskName = action.task.taskName;
      }
      state.listToDo = [...state.listToDo];
      return { ...state };
    case change_theme:
      let themeIndex = Theme.findIndex((theme) => theme.id == action.value);
      if (themeIndex !== -1) {
        state.currentTheme = Theme[themeIndex].value;
      }
      return { ...state };

    default:
      return { ...state };
  }
};
