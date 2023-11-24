import React from "react";

import styles from "./project.module.scss";

type Props = {
  link: string;
  title: string;
  description: string;
  picture: string;
};

const ProjectCard = ({ link, title, description, picture }: Props) => {
  return (
    <a href={link} className={styles.container}>
      <img className={styles.picture} src={picture} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
