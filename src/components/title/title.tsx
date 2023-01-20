import React from "react";

import styles from "./title.module.scss";

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>{children}</h2>
    </div>
  );
};

export default Title;
