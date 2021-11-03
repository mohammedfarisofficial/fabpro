import "./style.scss";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-menu">
        <div className="company-name">
          <h2>
            fabpro<span>.</span>
          </h2>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-slider"></div>
    </div>
  );
};

export default Navbar;
