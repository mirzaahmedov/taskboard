import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Field = styled.input`
  appearance: none;
  border: none;
  background: none;
  outline: none;
`;

const BaseInput = ({
  before,
  after,
  className,
  placeholder,
  type = "text",
}: {
  before?: React.ReactNode;
  after?: React.ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}) => {
  return (
    <Container className={className}>
      {before}
      <Field type={type} placeholder={placeholder} />
      {after}
    </Container>
  );
};

export default BaseInput;
