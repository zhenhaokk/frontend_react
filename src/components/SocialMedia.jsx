import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/zhenhaokk">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/windibit/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/franky-dong-pro/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
