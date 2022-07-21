import React from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Label from "../Label/Label";
import Search from "../Search/Search";
import "./App.scss";

export const AppContext = React.createContext();

export default function App() {
  const [searchWords, setSearchWords] = useState([
    {
      id: new Date().getTime(),
      text: "phones",
      isImported: true,
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AppContext.Provider value={{ searchWords, setSearchWords, setIsExpanded }}>
      <div className="app">
        <div className={`app__row ${isExpanded ? "expanded" : ""}`}>
          <Dropdown />
          <Search />
        </div>
        <div className="app__labels">
          {searchWords.map((word) => (
            <Label
              key={word.id}
              id={word.id}
              isImported={word.isImported}
              text={word.text}
            />
          ))}
        </div>
      </div>
    </AppContext.Provider>
  );
}
