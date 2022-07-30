import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../styled-components/Container";
import { ToDoListLightTheme } from "../theme/ToDoListLightTheme";
import { ToDoListDarkTheme } from "../theme/ToDoListDarkTheme";
import { ToDoListPrimaryTheme } from "../theme/ToDoListPrimaryTheme";
import { Dropdown } from "../styled-components/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../styled-components/Heading";
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
class TodoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListDarkTheme}>
        <Container>
          <Dropdown>
            <option value="">Primary Theme</option>
            <option value="">Dark Theme</option>
            <option value="">Light Theme</option>
          </Dropdown>
          <Heading1 className="py-2 my-2">To do app</Heading1>
          <div className="my-2 py-2 flex">
            <TextField
              span={"flex grow items-center"}
              label={"Task name"}
              className="ml-2 grow"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Button className="ml-2">
              <AiOutlinePlus style={{ display: "inline-block" }} />
              Add task
            </Button>
            <Button className="ml-2">
              <AiOutlineUpload style={{ display: "inline-block" }} />
              Update task
            </Button>
          </div>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th className="text-start">Task name</Th>
                <Th className="text-right">
                  <Button>
                    <AiFillEdit />
                  </Button>
                  <Button>
                    <AiOutlineCheck />
                  </Button>
                  <Button>
                    <AiOutlineClose />
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th className="text-start">Task name</Th>
                <Th className="text-right">
                  <Button>
                    <AiFillEdit />
                  </Button>
                  <Button>
                    <AiOutlineCheck />
                  </Button>
                  <Button>
                    <AiOutlineClose />
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
          <Heading3 className="py-2">Task complete</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th className="text-start">Task name</Th>
                <Th className="text-right">
                  <Button>
                    <AiOutlineClose />
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th className="text-start">Task name</Th>
                <Th className="text-right">
                  <Button>
                    <AiOutlineClose />
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

export default TodoList;
