import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../styled-components/Container";
import { ToDoListLightTheme } from "../theme/ToDoListLightTheme";
import { ToDoListDarkTheme } from "../theme/ToDoListDarkTheme";
import { ToDoListPrimaryTheme } from "../theme/ToDoListPrimaryTheme";
class TodoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListPrimaryTheme}>
        <Container>123</Container>
      </ThemeProvider>
    );
  }
}

export default TodoList;
