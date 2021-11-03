import { useState, useEffect, useRef} from "react";
import gsap from "gsap";
import "./style.scss";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isAnimating, setIsAmimating] = useState(false);
  const [listMenu, setListMenu] = useState(false);

  const linkRef = useRef(null)

  let time = 1;

  useEffect(() => {
    if (nav && !isAnimating) {
      setListMenu(true);
    } else {
      setListMenu(false);
    }
    console.log(listMenu);
  }, [isAnimating, nav, listMenu]);

  //gsap animation
  const tl = gsap.timeline({ defaults: { duration: time } });

  tl.to(".navbar-slider", {
    height: nav ? "15rem" : "2.8rem",
    ease: "power4.inOut",
  }).to('h3', {
    opacity : listMenu ? 1 : 0,
    duration : 0.1
  });
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
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-slider">
        <div className="navbar-contact-container">
          <div className="navbar-social">
            <h3>
              <div ref={linkRef} >Youtube</div>
              <div ref={linkRef} >Instagram</div>
            </h3>
          </div>
          <div className="navbar-contact">
            <h3 ref={linkRef}>
              <div  >Recent projects</div>
              <div ref={linkRef} >About us</div>
              <div ref={linkRef} >Contact Us</div>
            </h3>
          </div>
        </div>
        <div className="navbar-developer">
             <h3 ref={linkRef} >Designed and developed <span>Mohammed Faris</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
