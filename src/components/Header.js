const Header = () => {
  return (
    <div className="w-full fixed z-50 top-0 flex flex-col justify-center md:flex-row font-montserrat gap-x-8 items-center py-2 bg-headerBg backdrop-blur-sm">
      <div className="font-Montagu text-xl text-white">
        {"<"} Vishwas {"/>"}
      </div>
      <div className="bg-backgroundDark-0 text-gray-400 rounded-full px-4 p-2 border border-dark mt-3 md:mt-0">
        <ul className="flex items-center text-xs md:text-sm gap-x-4">
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Home
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Education
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Skills
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Experience
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Projects
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Contact
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded lg:px-4 py-1">
            Footer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
