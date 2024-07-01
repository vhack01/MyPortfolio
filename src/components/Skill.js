import Icon from "./Icon";
import {
  ICON_CPP_URL,
  ICON_CSS_URL,
  ICON_EXPRESS_URL,
  ICON_FIREBASE_URL,
  ICON_GITHUB_URL,
  ICON_GIT_URL,
  ICON_HTML_URL,
  ICON_JAVASCRIPT_URL,
  ICON_MONGODB_URL,
  ICON_NODE_URL,
  ICON_POSTMAN_URL,
  ICON_REACT_URL,
  ICON_REDUX_URL,
  ICON_SQL_URL,
  ICON_TAILWINDCSS_URL,
} from "../utils/constants";
import SubHeader from "./SubHeader";

const Skill = () => {
  const skills = [
    {
      name: "HTML5",
      img_url: ICON_HTML_URL,
    },
    {
      name: "CSS3",
      img_url: ICON_CSS_URL,
    },
    {
      name: "Javascript",
      img_url: ICON_JAVASCRIPT_URL,
    },
    {
      name: "ReactJS",
      img_url: ICON_REACT_URL,
    },
    {
      name: "TailwindCSS",
      img_url: ICON_TAILWINDCSS_URL,
    },
    {
      name: "Redux",
      img_url: ICON_REDUX_URL,
    },
    {
      name: "NodeJS",
      img_url: ICON_NODE_URL,
    },
    {
      name: "ExpressJS",
      img_url: ICON_EXPRESS_URL,
    },
    {
      name: "MongoDB",
      img_url: ICON_MONGODB_URL,
    },
    {
      name: "C++",
      img_url: ICON_CPP_URL,
    },
    {
      name: "SQL",
      img_url: ICON_SQL_URL,
    },
    {
      name: "Git",
      img_url: ICON_GIT_URL,
    },
    {
      name: "GitHub",
      img_url: ICON_GITHUB_URL,
    },
    {
      name: "POSTMAN",
      img_url: ICON_POSTMAN_URL,
    },
    {
      name: "FIREBAES",
      img_url: ICON_FIREBASE_URL,
    },
  ];

  return (
    <div className="w-full bg-backgroundDark-0" id="skill">
      {/* section */}
      <div className="w-[80%] m-auto py-10">
        {/* Skill header */}
        <SubHeader name={"Skills"} />
        {/* List */}
        <div className=" bg-skillBg rounded-md flex flex-wrap justify-center gap-5 mt-10 py-8">
          {skills.map((skill) => (
            <Icon skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
