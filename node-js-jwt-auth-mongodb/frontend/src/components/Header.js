import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
// import img1 from "src/components/images/logomd.jpg";
// import { Classes } from "@material-ui/styles/mergeClasses/mergeClasses";
import classes from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    navigate("/profile"); //changed
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/home" className={classes.header__content__logo}>
          𝗺𝗲𝗮𝗹 𝗗𝗿𝗼𝗽
          {/* <img
            className="header_logo"
            src={img1}
            alt="logo"
          /> */}
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/add-food" onClick={menuToggleHandler}>
                addFood
              </Link>
            </li>
            <li>
              <Link to="/request-food" onClick={menuToggleHandler}>
                requestFood
              </Link>
            </li>
            <li>
              <Link to="/donate" onClick={menuToggleHandler}>
                donate
              </Link>
            </li>
            <li>
              <Link to="/orders" onClick={menuToggleHandler}>
                orders
              </Link>
            </li>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                logout
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>profile</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
