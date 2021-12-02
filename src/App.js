import { useRef, useEffect } from "react";
import "./styles/globalStyle.scss";
import "./styles/locomotive.scss";
import Navbar from "./componets/Navbar/Navbar";
import Home from "./componets/pages/home/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const appRef = useRef(null);

  return (
    <LocomotiveScrollProvider options={{ smooth: true }} containerRef={appRef}>
      <div data-scroll-container ref={appRef}>
        <Navbar />
        <Home />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
