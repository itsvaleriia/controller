import React, { useContext } from "react";
import { AppContext } from "../App/App";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";

export default function Search() {
  const [value, setValue] = React.useState("");
  const { setSearchWords, setIsExpanded } = useContext(AppContext);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  const handleKeyPress = (event) => {
    event.preventDefault();

    if (event.target.value && event.keyCode === 13) {
      const values = event.target.value.split(" ");

      setSearchWords((prevState) => {
        const newValue = [...prevState];

        values.forEach((el, index) => {
          let id = new Date().getTime() + index;

          newValue.push({
            id,
            text: el,
          });
        });

        return newValue;
      });

      setValue("");
    }
  };

  return (
    <div className="search" onFocus={handleFocus} onBlur={handleBlur}>
      <input
        className="search__input"
        type="text"
        placeholder="Enter your data"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <SearchIcon className="search__icon" />
    </div>
  );
}
