import React from "react";

import "./project-card.scss";

type Props = {
  title: string;
  url: string;
  subtext: string;
  image: string;
};

const ProjectCard = ({ title, url, subtext, image }: Props) => {
  return (
    <a className="link" href={url}>
      <article className="container">
        <img src={image} className="image" />
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="subtext">{subtext}</p>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
