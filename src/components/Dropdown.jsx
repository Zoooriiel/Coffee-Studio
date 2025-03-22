import { FiChevronDown } from "react-icons/fi";

const Dropdown = () => {
  return (
    <div className="flex gap-1 pt-15 px-4">
      <button className="px-4 w-30 py-2 flex items-center justify-between rounded border border-transparent hover:border-primary cursor-pointer relative font-bold text-lg">
        <span className="block">
          <FiChevronDown color="#341c02" size={24} />
        </span>
      Region</button>

      <button className="px-4 w-30 py-2 flex items-center justify-between rounded border border-transparent hover:border-primary cursor-pointer relative font-bold text-lg">
        <span className="block">
          <FiChevronDown color="#341c02" size={24} />
        </span>
      Weight</button>

      <button className="px-4 w-39 py-2 flex items-center justify-between rounded border border-transparent hover:border-primary cursor-pointer relative font-bold text-lg">
        <span className="block">
          <FiChevronDown color="#341c02" size={24} />
        </span>
      Roast Level</button>
    </div>
  );
};

export default Dropdown;
