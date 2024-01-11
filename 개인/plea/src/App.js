import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "theme/theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,body{
    font-family: 'Noto Sans KR', sans-serif;
  }
  img{
    display: block;
    width: 100%;
  }
  button{
    border: 0;
    background: none;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .a11yHidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  input{
    background: transparent;
    border: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration{
      display:none;
  }
  a,button,input{
    outline: 0;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div className="Latem">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/newest" element={<Home/>} />
            </Routes>
          </div>
        </ThemeProvider>
    </BrowserRouter>
  )
}
export default App;
