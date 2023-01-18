import React from "react";

import styles from "./social-link.module.scss";

type Props = {
  text: string,
  number: number,
  link: string;
}

const SocialLink = ({text, number, link}: Props) => {
  return (
    <a href={link} className={`${styles.container}`}>
      <h3 className={`${styles.text}`}>{text}</h3>
      <p className={`${styles.number}`}>{number}</p>
    <div className={`${styles.overlay}`}></div>
    </a>
  );
}

export default SocialLink;