import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: yellow;
`;
const Content = styled.div`
  background-color: green;
`;

const RightPanel = () => {
  return (
    <>
      <Header>Header</Header>
      <Content>Content</Content>
    </>
  );
};

export default RightPanel;
