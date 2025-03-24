import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown';

const Filters = () => {
    const [region, setRegion] = useState("");
    const [weight, setWeight] = useState("");
    const [roastLevel, setRoastLevel] = useState("");
    const [dropdownData, setDropdownData] = useState([]);
    const [toggleDropdown, setToggleDropdown] = useState(null);

    useEffect(() => {
      fetch("/data/coffee.json")
      .then((response) => response.json())
      .then((data) => setDropdownData(data))
      .catch((error) => console.error("Error:", error))
    }, [])

    const regionOptions = [...new Set(dropdownData.map((item) => item.region).filter(Boolean))];
    const weightOptions = [...new Set(dropdownData.map((item) => item.weight).filter(Boolean))];
    const roastLevelOptions = [...new Set(dropdownData.map((item) => item.roast_level).filter(Boolean))];

    const handleDropdown = (key) => {
      setToggleDropdown(toggleDropdown === key ? null : key)
    }

  return (
    <div className='flex pt-10 pl-8'>
        <Dropdown
         key="region"
         selectedOption={region}
         label="Region"
         options={regionOptions}
         setSelectedOption={setRegion}
         toggleDropdown={handleDropdown}
         isOpen={toggleDropdown === "region"}
        />
         <Dropdown
         key="weight"
         selectedOption={weight}
         label="Weight"
         options={weightOptions}
         setSelectedOption={setWeight}
         toggleDropdown={handleDropdown}
         isOpen={toggleDropdown === "weight"}
        />
         <Dropdown
         key="roastLevel"
         selectedOption={roastLevel}
         label="Roast Level"
         options={roastLevelOptions}
         setSelectedOption={setRoastLevel}
         toggleDropdown={handleDropdown}
         isOpen={toggleDropdown === "roastLevel"}
        />
    </div>
  )
}

export default Filters
