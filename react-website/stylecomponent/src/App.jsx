
import './App.css'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from './Error';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import GoToTop from './components/GoToTop';

function App() {

  const theme ={
    colors:{
      heading :"rgb(24 24 29)",
      text: "rgb(24, 24, 29)",
      white :"#fff",
      black: "#212529",
      helper:"#8490ff",
      bg:"rgb(249 249 255)",
      footer_bg:"rgb(36, 16, 61)",
      hr: '#ffffff',
      border: "rgba(98 84 243 0.5)",
      shadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      
    },

    media: {mobile : "768px", tab:"998px"},
  };
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <GoToTop/>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
