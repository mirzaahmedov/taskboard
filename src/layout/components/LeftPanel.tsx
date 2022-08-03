import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
} from "../../assets/icons";

import Avatar from "../../components/UI/Avatar/Normal";

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
const Content = styled.div`
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
const Contents = styled.div`
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

const LeftPanel = () => {
  return (
    <>
      <Header>
        <Logo>Dashboard</Logo>
        <Button>
          <MenuOpen />
        </Button>
      </Header>
      <Content>
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
                <Contents>
                  <Icon>
                    <Inbox />
                  </Icon>
                  Inbox
                </Contents>
                <Badge>4</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <DriveFolderUpload />
                  </Icon>
                  Drive Files
                </Contents>
                <Badge>435</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <DashboardCustomize />
                  </Icon>
                  Boards
                </Contents>
                <Badge>5</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <AccessTime />
                  </Icon>
                  Updates
                </Contents>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <DataUsage />
                  </Icon>
                  Analytics
                </Contents>
                <Badge>2</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <SpaceDashboard />
                  </Icon>
                  CRM Dashboard
                </Contents>
                <Badge>2</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Sell />
                  </Icon>
                  Ecommerce
                </Contents>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Payment />
                  </Icon>
                  Cryptocurrency
                </Contents>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <LockClock />
                  </Icon>
                  Projects
                </Contents>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <ImageSearch />
                  </Icon>
                  NFT Marketplace
                </Contents>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Tune />
                  </Icon>
                  Settings
                </Contents>
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
                <Contents>
                  <Icon>
                    <Tag />
                  </Icon>
                  Additional Calendar
                </Contents>
                <Badge>6</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Tag />
                  </Icon>
                  Brand Logo Design
                </Contents>
                <Badge>11</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Tag />
                  </Icon>
                  User Research
                </Contents>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Tag />
                  </Icon>
                  Marketing Sales
                </Contents>
                <Badge>23</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <Tag />
                  </Icon>
                  New Project Template
                </Contents>
                <Badge>2</Badge>
              </Link>
              <Link to="#">
                <Contents>
                  <Icon>
                    <AddCircle />
                  </Icon>
                  Add New Project
                </Contents>
              </Link>
            </Nav>
          </details>
        </section>
      </Content>
    </>
  );
};

export default LeftPanel;
