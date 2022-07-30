import React, { Fragment } from "react";

import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color};
  min-height: 35px;
  height: 35px;
  font-size: 17px;
  display: initial;
  color: #000;
`;

const Label = styled.span`
  color: ${(props) => props.theme.color};
  width: auto;
`;

export const TextField = ({ span, label, ...props }) => {
  return (
    <span className={span}>
      <Label>{label}</Label>
      <Input {...props} />
    </span>
  );
};
