const SubHeader = ({ name }) => {
  return (
    <div className="w-full flex justify-center p-2 relative">
      <div className="absolute w-full border border-dark top-8"></div>
      <div className="text-white font-montserrat text-xl px-16 py-2 rounded-full z-20 bg-backgroundDark-0">
        {name}
      </div>
    </div>
  );
};

export default SubHeader;
