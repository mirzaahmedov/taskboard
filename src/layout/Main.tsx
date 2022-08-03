import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { FolderOpen, Notification } from "../assets/icons";
import SearchInput from "../components/UI/Search/Input";
import Avatar from "../components/UI/Avatar/Normal";

const Container = styled.div`
  flex: 1;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[60]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[60]};
`;
const Navigation = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
const Link = styled(NavLink)`
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray[400]};
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;
const Button = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray[200]};
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Content = styled.main``;

const Main = () => {
  return (
    <Container>
      <Header>
        <SearchInput />
        <Navigation>
          <Link to="/">Dashboard</Link>
          <Link to="/admin">My Tasks</Link>
          <Link to="/admin">My Tasks</Link>
          <Link to="/admin">Reporting</Link>
          <Link to="/admin">Portfolios</Link>
          <Link to="/admin">Goals</Link>
        </Navigation>
        <Flex>
          <Button>
            <FolderOpen />
          </Button>
          <Button>
            <Notification />
          </Button>
          <Avatar
            frame
            image="/src/assets/img/profile.jpg"
            alt="Nancy Martino"
            badge={2}
            status="busy"
          />
        </Flex>
      </Header>
      <Content></Content>
    </Container>
  );
};

export default Main;
