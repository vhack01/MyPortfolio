import { FaSchoolFlag } from "react-icons/fa6";
import { IoSchool, IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <div className="w-full bg-backgroundDark-0">
      {/* section */}
      <div className="w-[80%] m-auto py-10">
        {/* Education header */}
        <div className="w-full flex justify-center p-2 relative">
          <div className="absolute w-full border border-dark top-8"></div>
          <div className="text-white font-montserrat text-xl px-16 py-2 rounded-full z-20 bg-backgroundDark-0">
            Education
          </div>
        </div>
        {/* List */}
        <div className="mt-10 flex">
          {/* left */}
          <div className="w-6/12">
            <img src="https://abusaid.netlify.app/section.svg" alt="" />
          </div>
          {/* right */}
          <div className="w-6/12 flex flex-col gap-y-4 font-montserrat">
            <div className="border-2 border-gray-500 rounded-md flex gap-4 gap-x-6 p-4">
              <div>
                <IoSchoolSharp size={30} className="text-gray-200" />
              </div>
              <div className="w-full text-gray-100 flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <h1 className=" text-green-500 text-2xl font-bold">
                    Bachloar of Technology
                  </h1>
                  <h1 className="text-gray-100 text-sm font-semibold">
                    2021 - Present
                  </h1>
                </div>
                <div className="text-sm">
                  <h1 className="text-base">
                    Lovely Professional University,{" "}
                  </h1>
                  <h1>Phagwara, Punjab </h1>
                </div>
                <h1 className="text-sm">CGPA : 8.30</h1>
              </div>
            </div>

            <div className="border-2 border-gray-500 rounded-md flex gap-4 gap-x-6 p-4">
              <div>
                <FaSchoolFlag size={30} className="text-gray-200" />
              </div>
              <div className="w-full text-gray-100 flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <h1 className=" text-green-500 text-2xl font-bold">
                    Higher Secondary School
                  </h1>
                  <h1 className="text-gray-100 text-sm font-semibold">
                    2018 - 2020
                  </h1>
                </div>

                <div className="text-sm">
                  <h1 className="text-base">
                    Maharana Pratap Education Center
                  </h1>
                  <h1>Kanpur, Uttar Pradesh </h1>
                </div>
                <h1>Percentage : 91%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
