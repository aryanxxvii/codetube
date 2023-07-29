import React from "react"
import styled from "styled-components"
import LogoImg from "../img/logo.png"
import HomeIcon from "@mui/icons-material/Home"
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined"
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined"
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined"
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined"
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined"
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined"
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined"
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined"
import { Link } from "react-router-dom"
import { Javascript, JavascriptRounded } from "@mui/icons-material"
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`
const Wrapper = styled.div`
  padding: 18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`

const Img = styled.img`
  height: 30px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 10px;
  border-radius: 100px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div``
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LogoImg} />
          </Logo>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link
          to="trending"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>

        <Hr />
        <Link
          to="/language/javascript"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <i
              class="devicon-javascript-plain "
              style={{ fontSize: "24px" }}
            ></i>
            JavaScript
          </Item>
        </Link>
        <Link
          to="/language/cplusplus"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <i
              class="devicon-cplusplus-plain "
              style={{ fontSize: "24px" }}
            ></i>
            C++
          </Item>
        </Link>
        <Link
          to="/language/golang"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <i
              class="devicon-go-original-wordmark "
              style={{ fontSize: "24px" }}
            ></i>
            Golang
          </Item>
        </Link>

        <Link
          to="/language/java"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <i class="devicon-java-plain " style={{ fontSize: "24px" }}></i>
            Java
          </Item>
        </Link>

        <Link
          to="/language/python"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <i class="devicon-python-plain " style={{ fontSize: "24px" }}></i>
            Python
          </Item>
        </Link>

        <Hr />

        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
