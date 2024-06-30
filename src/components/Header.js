const Header = () => {
  return (
    <div className="w-full fixed top-0 flex justify-center font-montserrat gap-x-8 items-center py-2">
      <div className="font-Montagu text-xl text-gray-300">
        {"<"} Vishwas {"/>"}
      </div>
      <div className="flex bg-backgroundDark-0 text-gray-300 rounded-full px-4 p-2 border border-dark">
        <ul className="flex items-center text-sm gap-x-2">
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Home
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Education
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Skills
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Experience
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Projects
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Contact
          </li>
          <li className="cursor-pointer hover:text-white hover:rounded px-4 py-1">
            Footer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
