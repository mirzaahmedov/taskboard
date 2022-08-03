import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  MenuOpen,
  UnfoldMore,
  ExpandLess,
  Inbox,
  DriveFolderUpload,
  DashboardCustomize,
  AccessTime,
  DataUsage,
  SpaceDashboard,
  Sell,
  Payment,
  LockClock,
  ImageSearch,
  Tune,
  Tag,
  AddCircle,
} from "../assets/icons";
import Avatar from "../components/UI/Avatar/Normal";

const Container = styled.aside`
  min-height: 100%;
  flex-basis: 300px;
  border: 1px solid ${({ theme }) => theme.colors.gray[60]};
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[60]};
`;
const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts?.family?.sans};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`;
const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
`;
const Body = styled.div`
  padding: 0 30px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[60]};
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Name = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[800]};
`;
const Nickname = styled.span`
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray[200]};
`;
const MoreButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary[500]};
  cursor: pointer;
`;
const Title = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
`;
const Nav = styled.nav`
  padding-bottom: 30px;
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[60]};
  }
`;
const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  font-size: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[800]};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Icon = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};
`;
const Badge = styled.span`
  padding: 4px 8.5px;
  font-size: 10px;
  font-weight: 800;
  line-height: 16px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: ${({ theme }) => theme.colors.primary.opacity[10]};
`;

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Logo>Dashboard</Logo>
        <Button>
          <MenuOpen />
        </Button>
      </Header>
      <Body>
        <Profile>
          <User>
            <Avatar
              frame
              image="/src/assets/img/profile.jpg"
              alt="Nancy Martino"
            />
            <Details>
              <Name>Nancy Martino</Name>
              <Nickname>Designer</Nickname>
            </Details>
          </User>
          <MoreButton>
            <UnfoldMore />
          </MoreButton>
        </Profile>
        <section>
          <details open>
            <Title>
              DASHBOARDS <ExpandLess />
            </Title>
            <Nav>
              <Link to="#">
                <Content>
                  <Icon>
                    <Inbox />
                  </Icon>
                  Inbox
                </Content>
                <Badge>4</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <DriveFolderUpload />
                  </Icon>
                  Drive Files
                </Content>
                <Badge>435</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <DashboardCustomize />
                  </Icon>
                  Boards
                </Content>
                <Badge>5</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <AccessTime />
                  </Icon>
                  Updates
                </Content>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <DataUsage />
                  </Icon>
                  Analytics
                </Content>
                <Badge>2</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <SpaceDashboard />
                  </Icon>
                  CRM Dashboard
                </Content>
                <Badge>2</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Sell />
                  </Icon>
                  Ecommerce
                </Content>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Payment />
                  </Icon>
                  Cryptocurrency
                </Content>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <LockClock />
                  </Icon>
                  Projects
                </Content>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <ImageSearch />
                  </Icon>
                  NFT Marketplace
                </Content>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Tune />
                  </Icon>
                  Settings
                </Content>
                <Badge>2</Badge>
              </Link>
            </Nav>
          </details>
          <details open>
            <Title>
              PROJECTS <ExpandLess />
            </Title>
            <Nav>
              <Link to="#">
                <Content>
                  <Icon>
                    <Tag />
                  </Icon>
                  Additional Calendar
                </Content>
                <Badge>6</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Tag />
                  </Icon>
                  Brand Logo Design
                </Content>
                <Badge>11</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Tag />
                  </Icon>
                  User Research
                </Content>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Tag />
                  </Icon>
                  Marketing Sales
                </Content>
                <Badge>23</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <Tag />
                  </Icon>
                  New Project Template
                </Content>
                <Badge>2</Badge>
              </Link>
              <Link to="#">
                <Content>
                  <Icon>
                    <AddCircle />
                  </Icon>
                  Add New Project
                </Content>
              </Link>
            </Nav>
          </details>
        </section>
      </Body>
    </Container>
  );
};

export default Sidebar;
