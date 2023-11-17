import React, { useEffect } from "react";

import styles from "./hero.module.scss";
import SocialLink from "../social-link/social-link";
import HeroTitle from "./hero-title";
import { ChevronsDown } from "react-feather";

const Hero = ({}) => {
  const colors = ["#fab664", "#f9515a", "#82cac2"];

  useEffect(() => {
    var objects = Array.from(
      document.getElementsByTagName("object") as HTMLCollectionOf<HTMLObjectElement>
    );

    objects?.forEach(findBubbles);

    function findBubbles(object: HTMLObjectElement) {
      const doc = object.contentDocument

      const blobs = Array.from(doc?.getElementsByTagName("path") as HTMLCollectionOf<SVGPathElement>);
      console.log(blobs)

      blobs?.forEach(changeAnimationParameters) 
    }

    function shuffle (array: string[]) { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 

    function changeAnimationParameters(item: SVGPathElement) {
      const scale = Math.random() * (1.4 - 1.1) + 1.1;
      const speed = Math.random() * (50 - 20) + 20;
      const transform = item.transform;

      console.log()
      
      item.style.setProperty("--scale", scale.toString());
      item.style.setProperty("--current-transform-x", transform.baseVal[0].matrix.e.toString());
      item.style.setProperty("--current-transform-y", transform.baseVal[0].matrix.f.toString());
      
      item.style.animation = `wobble ${speed}s infinite`;
    }
  }, []);

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
      <object
        className={`${styles.blobs}`}
        type="image/svg+xml"
        data="/index/blobs.svg"
      ></object>
      <object
        className={`${styles.mobileBlobs}`}
        type="image/svg+xml"
        data="/index/mobile-blobs.svg"
      ></object>
    </div>
  );
};

export default Hero;
