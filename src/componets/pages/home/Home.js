import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.scss";
//locomotive
import LocomotiveScroll from 'locomotive-scroll';



const Home = () => {
  const pathRef = useRef(null);
  const overlayRef = useRef(null);
  const [ hidden,setHidden] = useState(false)


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
          setHidden(true)
        },
      })
      .play(0);
  };

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".box",
    start: "top top",
    once: true,
    onEnter: () => {
      animate()
    }
  });
  const scroll = new LocomotiveScroll();

  return (
    <div className="home-wrapper" data-scroll-section >
      <div className="home-landing"></div>
      <div  className="home-gallery">
        <div data-scroll data-scroll-speed="3" data-scroll-position="top" className="box" onClick={animate}></div>
        <svg
          ref={overlayRef}
          className={ hidden ? 'hide-overlay overlay' : 'overlay'}
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
        <div className="home-gallery-flex">

        </div>
      </div>
    </div>
  );
};

export default Home;
