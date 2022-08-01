import React from "react";
import styled from "styled-components";

const Container = styled.aside`
  height: 100%;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.gray[60]};
`;

const Sidebar = () => {
  return <Container>Sidebar</Container>;
};

export default Sidebar;
