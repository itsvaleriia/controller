import React, { useContext } from "react";
import { AppContext } from "../App/App";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloseIcon from "@mui/icons-material/Close";
import "./Label.scss";

export default function Label({ id, isImported = false, text }) {
  const { setSearchWords } = useContext(AppContext);

  const handleDelete = (id) => () => {
    if (id) {
      setSearchWords((prevState) => {
        return prevState.filter((el) => el.id !== id);
      });
    }
  };

  return (
    <div className="label">
      {isImported && (
        <FileCopyIcon
          className="label__file"
          sx={{ "&&": { color: "green", width: "17px" } }}
        />
      )}
      <span className="label__text">{text}</span>
      <CloseIcon
        className="label__close"
        onClick={handleDelete(id)}
        fontSize="17px"
      />
    </div>
  );
}
