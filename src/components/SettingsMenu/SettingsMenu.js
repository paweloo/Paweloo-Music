import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem/MenuItem";
import MenuColor from "./MenuItem/MenuColor";
import { CSSTransition } from "react-transition-group";
import { UserContext } from "../../App.js";
import { lightTheme, darkTheme } from "../../themes/mainTheme.js";
import "./style.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Menu = styled.div`
  background-color: grey;
  width: 200px;
  border-radius: 10px;
  position: fixed;
  top: 70px;
  right: 10px;
  z-index: 999;
  overflow: hidden;
  padding: 10px;
  transition: height 0.5s ease, opacity 0.1s, top 0.1s;

  &.fade-enter {
    opacity: 0;
    top: 60px;
  }

  &.fade-enter-active {
    opacity: 1;
    top: 70px;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
  }
`;

function SettingsMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useContext(UserContext);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 20);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight + 20;
    setMenuHeight(height);
  }

  function toggle() {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (
    <Menu style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <MenuItem>User name</MenuItem>
          <MenuItem>Profile image</MenuItem>
          <MenuItem onClick={() => setActiveMenu("theme")}>Theme</MenuItem>
          <MenuItem onClick={() => setActiveMenu("colors")}>Colors</MenuItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "theme"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu-colors">
          <MenuItem onClick={() => setActiveMenu("main")}>Back</MenuItem>
          <ToggleSwitch
            onClick={() => {
              toggle();
            }}
            dark={theme === lightTheme ? false : true}
          />
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "colors"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu-colors">
          <MenuItem onClick={() => setActiveMenu("main")}>Back</MenuItem>
          <MenuColor color="#A719D2" />
          <MenuColor color="#33B7FF" />
          <MenuColor color="#C5FF33" />
          <MenuColor color="#FF5733" />
          <MenuColor color="#FF3383" />
          <MenuColor color="#33FFB0" />
          <MenuColor color="#DAF7A6 " />
          <MenuColor color="#33FF3E" />
          <MenuColor color="#337CFF" />
        </div>
      </CSSTransition>
    </Menu>
  );
}

export default SettingsMenu;
