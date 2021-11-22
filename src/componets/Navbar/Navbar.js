import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.scss";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isAnimating, setIsAmimating] = useState(false);
  const [listMenu, setListMenu] = useState(false);

  const linkRef = useRef(null);

  let time = .5;

  useEffect(() => {
    if (nav && !isAnimating) {
      setListMenu(true);
    } else {
      setListMenu(false);
    }
    console.log(listMenu);
  }, [isAnimating, nav, listMenu]);

  //gsap animation
  const tl = gsap.timeline();
  // const t2 = gsap.timeline({ defaults: { duration: 1 } });

  tl.to(
    ".navbar-slider2",
    {
      height: nav ? "22rem" : "2.8rem",
      ease: "Expo.inOut",
      duration: time,
    },
    "start"
  )
    .to(
      ".navbar-slider",
      {
        height: nav ? "15rem" : "2.8rem",
        ease: "Expo.inOut",
        duration: 1.1,
        boxShadow: nav ? '0px 7px 9px 3px #0000001c' : 'none'
      })



  //hamburger toggle
  const hamburgerHandler = () => {
    if (isAnimating) {
    } else {
      setIsAmimating(true);
      setNav(!nav);
      setTimeout(() => {
        setIsAmimating(false);
      }, time * 1000);
    }
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar-menu">
        <div className="company-name">
          <h2>
            fabpro<span>.</span>
          </h2>
        </div>
        <div onClick={hamburgerHandler} className="hamburger">
          <div className='line bottom-line'></div>
          <div className='line top-line'></div>
        </div>
      </div>
      <div className="navbar-slider">
        <div className="navbar-contact-container">
          <div className="navbar-social">
          </div>
          <div className="navbar-contact">
          </div>
        </div>
      </div>
      <div className="navbar-slider2"></div>
    </div>
  );
};

export default Navbar;
