import React, { useState } from "react";

import styles from "./header.module.scss";

const Header = ({}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>tungstun</h2>
      <div className={`${styles.menu} ${menuOpen && styles.menu__open}`}>
        <nav className={`${styles.menu__links}`}>
          <a className={`${styles.glitch}`} data-text="pr0j3cts">projects</a>
          <a className={`${styles.glitch}`} data-text="ph0t0gr4phy">photography</a>
          <a className={`${styles.glitch}`} data-text="conta6-">contact</a>
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
