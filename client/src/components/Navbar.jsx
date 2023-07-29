import React, { useState } from "react"
import styled from "styled-components"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined"

import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
const Container = styled.div`
  z-index: 9999;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border: 2px solid #444;
  border-radius: 100px;
`

const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 2px solid #c199fb;
  color: #3ea6ff;
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [q, setQ] = useState("")
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" onChange={(e) => setQ(e.target.value)} />
          <SearchOutlinedIcon
            onClick={() => {
              navigate(`/search?q=${q}`)
            }}
            style={{ color: "#bbb " }}
          />
        </Search>
        {currentUser ? (
          <User>
            <Avatar />
            {currentUser.name}
          </User>
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon style={{ color: "#C199FB" }} />
              <p style={{ color: "#C199FB" }}>Sign In</p>
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  )
}

export default Navbar
