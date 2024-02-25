import React from "react";

import styles from "./social-link.module.scss";

type Props = {
  abbreviation: string;
  text: string;
  number: number;
  link: string;
};

const SocialLink = ({ abbreviation, text, number, link }: Props) => {
  return (
    <a target="_blank" href={link} className={`${styles.container}`}>
      <div className={`${styles.top}`}>
        <h3 className={`${styles.abbreviation}`}>{abbreviation}</h3>
        <p className={`${styles.text}`}>({text})</p>
      </div>
      <p className={`${styles.number}`}>{number}</p>
      <div className={`${styles.overlay} ${styles.overlay_left}`}></div>
      <div className={`${styles.overlay} ${styles.overlay_right}`}></div>
    </a>
  );
};

export default SocialLink;
