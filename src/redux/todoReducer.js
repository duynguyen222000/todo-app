import { add_task, status_task } from "./type/type";
import Swal from "sweetalert2/dist/sweetalert2.js";
const initialState = {
  listToDo: [],
};

export default (state = initialState, action) => {
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
      let index = state.listToDo.findIndex((task) => task.id == action.taskId);
      console.log(index);
      if (index !== -1) {
        state.listToDo[index].status = true;
      }
      state.listToDo = [...state.listToDo];
      return { ...state };
    default:
      return { ...state };
  }
};
