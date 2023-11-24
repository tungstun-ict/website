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
      <img src={picture} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
