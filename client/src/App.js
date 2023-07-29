import { useState } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import { darkTheme, lightTheme } from "./utils/Theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Video from "./pages/Video"
import Language from "./pages/Language"
import Search from "./pages/Search"
import SignIn from "./pages/SignIn"
import { Global } from "@emotion/react"

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inter';
}
`

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route
                    index
                    path="trending"
                    element={<Home type="trend" />}
                  />
                  <Route path="language">
                    <Route path=":langName" element={<Language />} />
                  </Route>
                  <Route
                    index
                    path="subscriptions"
                    element={<Home type="subscribed" />}
                  />
                  <Route path="search" element={<Search />} />

                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
