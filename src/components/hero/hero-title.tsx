import React from "react";

import styles from "./hero-title.module.scss";

const HeroTitle = ({}) => {
  return (
    <div className={`${styles.container}`}>
      <svg
        className={`${styles.title_clip}`}
        xmlns="http://www.w3.org/2000/svg"
        width="787.757"
        fill="#82CAC2"
        height="596.312"
        viewBox="0 0 787.757 596.312"
      >
        <path
          id="title-clip"
          d="M393.878,0C497.642,0,592,41.466,663.1,91.638c76.386,53.9,124.658,120.4,124.658,206.518,0,33.427-22.752,76.822-36.419,107.413-52.359,117.2-184.085,190.743-357.459,190.743-43.019,0-72.192-8.085-114.613-13.74-57.365-7.643-125.648-16.842-167.653-46.756C36.2,482.114,0,383.783,0,298.156c0-63.726,39.578-114.028,85.142-163.1C155.827,58.916,260.531,0,393.878,0Z"
        />
        <use clip-path="url(#title-clip)" />
      </svg>
      <p className={`${styles.title} ${styles.title__top}`}>tungstun</p>
      <p className={`${styles.title} ${styles.title__bottom}`}>tungstun</p>
      <h1 className={`${styles.title} ${styles.title__white}`}>tungstun</h1>
    </div>
  );
};

export default HeroTitle;
