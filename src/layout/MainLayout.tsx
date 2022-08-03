import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 300px 1fr 90px;
`;

const MainLayout = () => {
  return (
    <Container>
      <LeftPanel />
      <Header />
      <Outlet />
      <RightPanel />
    </Container>
  );
};

export default MainLayout;
