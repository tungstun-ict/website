import React from "react";

import styles from "./hero.module.scss";
import SocialLink from "../social-link/social-link";
import HeroTitle from "./hero-title";

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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1923.447"
        height="947.291"
        viewBox="0 0 1923.447 947.291"
        className={`${styles.blobs}`}
      >
        <g
          id="Group_13"
          data-name="Group 13"
          transform="translate(3.447 -356.421)"
        >
          <path
            id="Path_954"
            data-name="Path 954"
            d="M92.489,0c24.365,0,46.522,12.863,63.218,28.427,17.937,16.719,29.272,37.348,29.272,64.063,0,10.369-5.343,23.831-8.552,33.32-12.295,36.357-43.226,59.17-83.938,59.17-10.1,0-16.952-2.508-26.913-4.262-13.47-2.371-29.5-5.224-39.368-14.5C8.5,149.554,0,119.051,0,92.489c0-19.768,9.294-35.372,19.993-50.6C36.591,18.276,61.177,0,92.489,0Z"
            transform="translate(315.479 760.412) rotate(-21)"
            fill="#f9515a"
          />
          <path
            id="Path_946"
            data-name="Path 946"
            d="M2049,650.9s118.514-7.768,183.156,38.086,132.686,121.905,201.864,136.444,221.143-27.96,261.969-48.091,258.567-53.683,340.22,8.947,145.161,129.734,163.306,182.3,34.747,88.521-9.516,130.679-54.9,37.956-167.537,37.956-173.064-28.1-283-37.956c-75.834-6.8-161.966,75.225-337.862,80.378S2049,1268.2,2049,1268.2Z"
            transform="translate(-2049 35.509)"
            fill="#fab664"
          />
          <path
            id="Path_948"
            data-name="Path 948"
            d="M131.844,0c34.733,0,66.317,18.336,90.117,40.522,25.569,23.833,41.727,53.239,41.727,91.322,0,14.782-7.616,33.971-12.191,47.5-17.526,51.827-61.619,84.346-119.653,84.346-14.4,0-24.165-3.575-38.365-6.076-19.2-3.38-42.058-7.447-56.119-20.675C12.116,213.19,0,169.708,0,131.844c0-28.18,13.248-50.423,28.5-72.123C52.161,26.053,87.208,0,131.844,0Z"
            transform="translate(1032.782 762)"
            fill="#82cac2"
          />
          <path
            id="Path_949"
            data-name="Path 949"
            d="M68.748,0c18.111,0,34.58,9.561,46.99,21.13C129.071,33.557,137.5,48.891,137.5,68.748c0,7.708-3.971,17.714-6.357,24.767C122,120.54,99.009,137.5,68.748,137.5c-7.509,0-12.6-1.864-20-3.168-10.013-1.762-21.931-3.883-29.262-10.781C6.318,111.165,0,88.492,0,68.748,0,54.055,6.908,42.456,14.861,31.14,27.2,13.585,45.474,0,68.748,0Z"
            transform="translate(1341.711 684.707) rotate(-21)"
            fill="#f9515a"
          />
          <path
            id="Path_952"
            data-name="Path 952"
            d="M79.346,0c20.9,0,49.846,4.151,64.169,17.5,15.388,14.343,15.176,38.924,15.176,61.842,0,8.9-4.583,20.444-7.337,28.585-5.432,16.063-18.632,18.95-31.74,27.922-11.892,8.141-23.33,22.839-40.269,22.839-8.666,0-14.543-2.152-23.088-3.656C44.7,153,30.946,150.553,22.484,142.592,7.292,128.3,0,102.133,0,79.346,0,62.387,7.973,49,17.152,35.941,31.391,15.679,52.483,0,79.346,0Z"
            transform="matrix(0.375, 0.927, -0.927, 0.375, 1682.129, 947.105)"
            fill="#fab664"
          />
          <path
            id="Path_950"
            data-name="Path 950"
            d="M3955.494,148.384s-30.973,12.709-63.795,52.564-28.132,75.021-50.906,99.135-56.265,54.926-93.776,83.059-48.228,88.417-45.548,125.928,89.757,91.1,101.814,119.229,45.548,83.059,80.379,85.738,71.832,50.11,71.832,50.11Z"
            transform="translate(-2035.494 399.336)"
            fill="#f9515a"
          />
          <path
            id="Path_953"
            data-name="Path 953"
            d="M2231.49,451.232c31.348,34.831,43,80.634,72.608,122.431s22.612,190.877,40.027,236.157,97.527,97.527,113.2,121.909,31.348,102.751-41.8,137.582-181.583,69.92-181.583,69.92"
            transform="translate(-2234.937 -94.812)"
            fill="#82cac2"
          />
        </g>
      </svg>
    </div>
  );
};

export default Hero;
