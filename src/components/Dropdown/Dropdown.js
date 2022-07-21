import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Dropdown.scss";

export default function Dropdown() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const ref = useRef(null);

  const optionsList = ["Everywhere", "Whole words", "In description"];

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOptionsOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOptionsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOptionsOpen]);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        aria-expanded={isOptionsOpen}
        className={`dropdown__btn ${isOptionsOpen ? "expanded" : ""}`}
        onClick={toggleOptions}
      >
        <span>{optionsList[selectedOption]}</span>
        <KeyboardArrowDownIcon className="dropdown__arrow" fontSize="small" />
      </button>
      <ul
        className={`dropdown__options ${isOptionsOpen ? "show" : ""}`}
        role="listbox"
        aria-activedescendant={optionsList[selectedOption]}
        tabIndex={-1}
      >
        {optionsList.map((option, index) => (
          <li
            key={option}
            id={option}
            role="option"
            aria-selected={selectedOption === index}
            tabIndex={0}
            onClick={() => {
              setSelectedThenCloseDropdown(index);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
