import { FaGithub, FaLink } from "react-icons/fa";
import SubHeader from "./SubHeader";
import IconCover from "./IconCover";
import ImageSlider from "./ImageSlider";

const Project = () => {
  return (
    <div className="w-full bg-backgroundDark-0" id="projects">
      {/* section */}
      <div className="w-[80%] m-auto py-10">
        {/* Projects header */}
        <SubHeader name="Projects" />
        {/* List */}
        <div className="rounded-md flex flex-col md:flex-row border-2 border-dark2 mt-10 p-4">
          {/* Image and Links */}
          <div className="w-full md:w-1/2 flex flex-col p-2">
            <div className="flex justify-start">
              <h1 className="font-montserrat font-bold text-3xl text-gray-100">
                Mini Twitter
              </h1>
              <div className="flex gap-x-3 ml-6">
                <IconCover
                  icon={<FaLink />}
                  link="https://mini-twitter-app.vercel.app/"
                />
                <IconCover
                  icon={<FaGithub />}
                  link="https://github.com/vhack01/Mini-Twitter"
                />
              </div>
            </div>
            {/* ImageSlider */}
            <div className="flex justify-center md:justify-start p-2 my-4">
              <ImageSlider />
            </div>
            <div>
              <h1 className="text-sm text-gray-300">Technologies used:</h1>
              <div className="flex flex-wrap gap-2 p-2">
                {/* Tech used */}
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  HTML5
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  CSS3
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Javascript
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ReactJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  TailwindCSS
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Redux
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  NodeJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ExpressJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  MongoDB
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/2">Video Section</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
