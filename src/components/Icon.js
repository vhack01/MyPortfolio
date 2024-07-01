const Icon = ({ skill }) => {
  console.log("skill:", skill);
  return (
    <div className="h-36 w-36 rounded bg-iconDark shadow-iconShadow flex flex-col justify-center items-center gap-y-4">
      <img src={skill.img_url} alt="react" className="w-[50%]" />
      <div className="text-white font-montserrat">{skill.name}</div>
    </div>
  );
};

export default Icon;
