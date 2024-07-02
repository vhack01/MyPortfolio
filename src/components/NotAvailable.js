import { LuVideoOff } from "react-icons/lu";

const NotAvailable = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-red-200 h-80 w-full flex justify-center items-center rounded-md">
        <LuVideoOff className="text-black" size={50} />
      </div>
    </div>
  );
};

export default NotAvailable;
