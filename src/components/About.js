import { TypeAnimation } from "react-type-animation";
import IconCover from "./IconCover";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const About = () => {
  const handleResumeDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/Vishwas_Resume.pdf";
    anchor.download = "cv.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="w-full bg-backgroundDark-0" id="home">
      <div className="w-[100%] border-red-400 md:w-[90%] lg:w-[80%] m-auto relative pt-20 flex flex-col md:flex-row md:justify-center">
        {/* LeftSide */}
        <div className="w-[100%] md:w-[60%] lg:w-[50%] font-Rubik md:py-20 xl:p-20 flex flex-col items-center md:items-start gap-y-8 py-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            {" "}
            {"Hello, I'm "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Vishwas",
                1000,
                "vhack",
                1000,
              ]}
              speed={30}
              style={{
                background: "-webkit-linear-gradient(#32ff47, #111)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              repeat={Infinity}
            />
          </h1>
          <div className="font-thin text-gray-200 font-montserrat flex flex-col items-center md:items-start gap-y-2 ">
            <h1 className="text-xl md:text-2xl">Making the</h1>
            <h1 className="text-2xl md:text-4xl">
              Impossible <span className="font-bold">Possible.</span>
            </h1>
            <h1 className="text-xl md:text-2xl">Using 1's and 0's.</h1>
          </div>

          {/* Icons */}
          <div className="flex gap-x-4">
            <IconCover
              icon={<FaGithub className="" />}
              link="https://github.com/vhack01"
            />
            <IconCover
              icon={<FaLinkedin className="" />}
              link="https://www.linkedin.com/in/vishwas-kumar1/"
            />
            <IconCover
              icon={<FaTwitter className="" />}
              link="https://x.com/vhacking_01"
            />
            <IconCover
              icon={<SiLeetcode className="" />}
              link="https://leetcode.com/u/vishwas__/"
            />
          </div>

          {/* Button */}
          <div className="">
            <button
              className="text-white rounded-full px-4 py-3 flex items-center gap-x-4 border border-gray-500 hover:border-gray-200"
              onClick={handleResumeDownload}
            >
              <span>Download Resume</span>
              <FaDownload />
            </button>
          </div>
        </div>

        {/* RightSide */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-start items-center pt-4">
          <div className="h-32 w-32 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden">
            <img
              src="/profile_photo.jpg"
              alt="banner"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
