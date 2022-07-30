import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../styled-components/Container";
import { ToDoListLightTheme } from "../theme/ToDoListLightTheme";
import { ToDoListDarkTheme } from "../theme/ToDoListDarkTheme";
import { ToDoListPrimaryTheme } from "../theme/ToDoListPrimaryTheme";
import { Dropdown } from "../styled-components/Dropdown";
import { Heading1, Heading3 } from "../styled-components/Heading";
import { TextField } from "../styled-components/TextField";
import { Button } from "../styled-components/Button";
import {
  AiOutlinePlus,
  AiOutlineUpload,
  AiFillEdit,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { Table, Thead, Tr, Th } from "../styled-components/Table";
import { connect } from "react-redux/es/exports";
import {
  addTaskToDo,
  changeStatusTask,
  changeTheme,
  removeTask,
  updateTask,
} from "../redux/action/action";
import { Theme } from "../theme/Theme";

class TodoList extends Component {
  state = {
    value: "",
    id: "",
  };
  renderTaskToDo = () => {
    return this.props.listToDo
      .filter((task) => !task.status)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th className="text-start">{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState({
                    value: task.taskName,
                    id: task.id,
                  });
                }}
              >
                <AiFillEdit />
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(changeStatusTask(task.id));
                }}
              >
                <AiOutlineCheck />
              </Button>
              <Button
                onClick={() => {
                  console.log("remove", task.id);
                  this.props.dispatch(removeTask(task.id));
                }}
              >
                <AiOutlineClose />
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskComplete = () => {
    return this.props.listToDo
      .filter((task) => task.status)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th className="text-start">{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  console.log("remove", task.id);
                  this.props.dispatch(removeTask(task.id));
                }}
              >
                <AiOutlineClose />
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTheme = () => {
    return Theme.map((name, index) => {
      return (
        <option value={name.id} key={index}>
          {name.name}
        </option>
      );
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.props.themeValue}>
        <Container>
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              console.log(value);
              this.props.dispatch(changeTheme(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading1 className="py-2 my-2">To do app</Heading1>
          <div className="my-2 py-2 flex">
            <TextField
              span={"flex grow items-center"}
              label={"Task name"}
              className="ml-2 grow"
              value={this.state.value}
              onChange={(e) => {
                let { value } = e.target;
                this.setState({
                  value,
                });
              }}
            />
            <Button
              onClick={() => {
                let task = {
                  id: Math.random(),
                  taskName: this.state.value,
                  status: false,
                };
                this.setState({
                  value: "",
                });
                this.props.dispatch(addTaskToDo(task));
              }}
              className="ml-2"
            >
              <AiOutlinePlus style={{ display: "inline-block" }} />
              Add task
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  value: "",
                });
                let task = {
                  id: Math.random(),
                  taskName: this.state.value,
                  status: false,
                };
                let idTask = this.state.id;
                console.log(idTask);
                this.props.dispatch(updateTask(task, idTask));
              }}
              className="ml-2"
            >
              <AiOutlineUpload style={{ display: "inline-block" }} />
              Update task
            </Button>
          </div>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3 className="py-2">Task completed</Heading3>
          <Table>
            <Thead>{this.renderTaskComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listToDo: state.todoReducer.listToDo,
    themeValue: state.todoReducer.currentTheme,
  };
};
export default connect(mapStateToProps)(TodoList);
