import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About us";
import { useEffect, useState } from "react";
import NoPath from "./Components/NoPath/NoPath";
import AOS from "aos";
import PreLoader from "./Components/NoPath/PreLoader";

function App() {
  const [loader, setLoader] = useState(false);

  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {loader ? (
        <PreLoader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPath />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
