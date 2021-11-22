import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.scss";

const Home = () => {
  const pathRef = useRef(null);
  const overlayRef = useRef(null);
  const [overlay, setOverlay] = useState(false);
  //gsap animation
  const tl = gsap.timeline({ paused: true });

  const first = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const second = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
  const third = "M 0 0 V 0 Q 50 0 100 0 V 0 z";

  const animate = () => {
    tl.to(pathRef.current, 0.8, { attr: { d: first }, ease: "Power2.easeIn" })
      .to(pathRef.current, 0.8, { attr: { d: second }, ease: "Power2.easeOut" })
      .to(pathRef.current, 0.8, {
        attr: { d: third },
        ease: "Power2.easeOut",
        onComplete: () => {
          overlayRef.current.classList.add("hide-overlay");
          // overlayRef.current.classList.remove("menu-wrap--open");
        },
      })

      // tl.to(pathRef.current, 0.8, { attr: { d: forth }, ease: 'Power2.easeOut' })
      .play(0);
  };

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".box",
    start: "top top",
    once: true,
    onEnter: () => console.log("enter"),
  });

  return (
    <div className="home-wrapper">
      <div className="home-landing"></div>
      <div  className="home-gallery">
        <div className="box" onClick={animate}></div>
        <svg
          ref={overlayRef}
          className="overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="#ff0000"
        >
          <path
            ref={pathRef}
            stroke="#ff0000"
            strokeWidth="2px"
            dur="10s"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath xlinkHref="#path" />
          </animateMotion>
        </svg>
      </div>
    </div>
  );
};

export default Home;
