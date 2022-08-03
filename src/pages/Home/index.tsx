import React from "react";
import styled from "styled-components";

import Main from "../../layout/Main";
import Sidebar from "../../layout/Sidebar";

const View = styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
`;

const Home = () => {
  return (
    <View>
      <Sidebar />
      <Main />
    </View>
  );
};

export default Home;
