import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import "./styles.css";

function Key({ keyVal, bigKey }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(Appcontext);

  const selectLetter = () => {
    if (keyVal === "ENTER"){
      onEnter();
    } else if (keyVal === "DELETE"){
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  }

  return (
    <div className="key" id={bigKey && "big"}
    onClick={selectLetter}>
      {keyVal}
    </div>
  )
}

export default Key;