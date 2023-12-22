import React, { useState } from "react";

import styles from "./header.module.scss";

const Header = ({ title }: { title?: string }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className={`${styles.container}`}>
      <a href="/">
        <h2 className={`${styles.title}`}>tungstun</h2>
      </a>
      <img
        onClick={() => {
          window.location.href = "/";
        }}
        src="/assets/tungstun-icon-white.png"
        alt="icon"
        className={styles.icon}
      />
      <h1 className={`${styles.page_title}`}>{title}</h1>
      <div className={`${styles.menu} ${menuOpen && styles.menu__open}`}>
        <nav className={`${styles.menu__links}`}>
          <a href="/projects">projects</a>
          {/* <a href="/photography">photography</a>
          <a href="/contact">contact</a> */}
        </nav>
        <div
          className={`${styles.menuButton}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("hi");
          }}
        >
          <img
            src="/assets/svgs/menu.svg"
            onClick={() => {
              setMenuOpen(!menuOpen);
              console.log("hi");
            }}
            className={`${styles.menu__icon}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
