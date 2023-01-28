import React from "react";

import styles from "./hero.module.scss";
import SocialLink from "../social-link/social-link";
import HeroTitle from "./hero-title";
import { ChevronsDown } from "react-feather";

const Hero = ({}) => {
  return (
    <div className={`${styles.container}`}>
      <HeroTitle />
      <div className={`${styles.socials}`}>
        <SocialLink
          link="https://www.linkedin.com/in/jort-willemsen-363746198/"
          abbreviation="Li"
          text="LinkedIn"
          number={3}
        />
        <SocialLink
          link="https://www.behance.net/jortwillemsen"
          abbreviation="Be"
          text="Behance"
          number={4}
        />
        <SocialLink
          link="https://www.instagram.com/tungstun_design_ict/"
          abbreviation="In"
          text="Instagram"
          number={49}
        />
        <SocialLink
          link="https://github.com/jortwillemsen"
          abbreviation="Gi"
          text="Github"
          number={57}
        />
      </div>
      <ChevronsDown className={`${styles.downIcon}`} size={80} />
      <object className={`${styles.blobs}`} type="image/svg+xml" data="/index/blobs.svg"></object>
      <object className={`${styles.mobileBlobs}`} type="image/svg+xml" data="/index/mobile-blobs.svg"></object>

    </div>
  );
};

export default Hero;
