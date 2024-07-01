const Icon = ({ url }) => {
  return (
    <div className="h-24 w-24 rounded-full bg-iconDark shadow-md shadow-dark flex justify-center items-center">
      <img src={url} alt="react" className="w-[60%]" />
    </div>
  );
};

export default Icon;
