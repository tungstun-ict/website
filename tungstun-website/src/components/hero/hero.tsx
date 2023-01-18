import React from "react";

import styles from "./hero.module.scss";
import SocialLink from "../social-link/social-link";

const Hero = ({}) => {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>tungstun</h1>
      <div className={`${styles.socials}`}>
        <SocialLink 
          link="https://www.linkedin.com/in/jort-willemsen-363746198/"
          text="Li"
          number={3} />
        <SocialLink 
          link="https://www.behance.net/jortwillemsen"
          text="Be"
          number={4} />
        <SocialLink 
          link="https://www.instagram.com/tungstun_design_ict/"
          text="In"
          number={49} />
        <SocialLink 
          link="https://github.com/jortwillemsen"
          text="Gi"
          number={57} />
      </div>
    </div>
  );
}

export default Hero;