import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Dropdown = ({toggleDropdown, key, handleDropdown, selectedOption, label, options, setSelectedOption}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(toggleDropdown === key); // Check if this dropdown should be open
  }, [toggleDropdown, key]);

  return (
    <div className="relative">

      {/* Dropdown Button */}
      <button 
      onClick={() => setIsOpen(!isOpen)} 
      className="w-34 pt-4 flex items-center gap-1 rounded border-transparent hover:border-primary cursor-pointer relative font-semibold text-lg">

        {selectedOption || label}
        <span>
          {isOpen ? <FiChevronUp color="#341c02" size={24} /> 
          : 
          <FiChevronDown color="#341c02" size={24} />}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white shadow-lg border rounded-md">
          {options.map((option) => (
          <li 
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            handleSelectOption(option)
            handleDropdown(key)
          }}>
          {option}
          </li>
          ))}
        </ul>
      )}
      </div>
  );
};

export default Dropdown;
