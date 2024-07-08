const Header = () => {
  const handleScroll = (e, link) => {
    e.prevetDefault();
    document.getElementById(link).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full fixed z-50 top-0 flex flex-col justify-center md:flex-row font-montserrat gap-x-8 items-center py-2 bg-headerBg backdrop-blur-sm">
      <div className="font-Montagu text-xl text-white">
        {"<"} Vishwas {"/>"}
      </div>
      <div className="bg-backgroundDark-0 text-gray-400 rounded-full px-4 p-2 border border-dark mt-3 md:mt-0">
        <ul className="flex items-center text-xs md:text-sm gap-x-4">
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            <a href="#skill">Skill</a>
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            <a href="#education">Education</a>
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            <a href="#contact">Contact</a>
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            <a href="#footer">Footer</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
