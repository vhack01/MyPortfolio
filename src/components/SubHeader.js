import useScrollReveal from "../hooks/useScrollReveal";

const SubHeader = ({ name }) => {
  const [ref, isVisible] = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-3 fade-in-up ${
        isVisible ? "visible" : ""
      }`}
    >
      <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">
        {`// ${name}`}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit">
        {name}
      </h2>
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 mt-1" />
    </div>
  );
};

export default SubHeader;
