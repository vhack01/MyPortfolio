import IconCover from "./IconCover";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Connect = () => {
  return (
    <div className="flex gap-2">
      <IconCover
        icon={<FaGithub size={16} />}
        link="https://github.com/vhack01"
        label="GitHub"
      />
      <IconCover
        icon={<FaLinkedin size={16} />}
        link="https://www.linkedin.com/in/vishwas-kumar1/"
        label="LinkedIn"
      />
      <IconCover
        icon={<FaTwitter size={16} />}
        link="https://x.com/vhacking_01"
        label="Twitter"
      />
      <IconCover
        icon={<SiLeetcode size={16} />}
        link="https://leetcode.com/u/vishwas__/"
        label="LeetCode"
      />
    </div>
  );
};

export default Connect;
