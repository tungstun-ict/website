import React, { useState } from "react";

import styles from "./header.module.scss";

const Header = ({}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>tungstun</h2>
      <div className={`${styles.menu} ${menuOpen && styles.menu__open}`}>
        <nav className={`${styles.menu__links}`}>
          <a>projects</a>
          <a>photography</a>
          <a>contact</a>
        </nav>
        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("hi");
          }}
        >
          <object
            type="image/svg+xml"
            data="/index/menu.svg"
            className={`${styles.menu__icon}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
