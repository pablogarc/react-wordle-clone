import React, { useCallback, useEffect, useContext } from 'react';
import { Appcontext } from '../../App';
import Key from "../Key";
import "./styles.css";

function Keyboard() {
  const {currAttempt, onSelectLetter, onDelete, onEnter } = useContext(Appcontext);

  const keysLine1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keysLine2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keysLine3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter"){
      onEnter();
    } else if (event.key === "Backspace"){
      onDelete();
    } else {
      keysLine1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
      keysLine2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
      keysLine3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
    }
  }, [currAttempt]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keysLine1.map((key) => {
        return <Key keyVal={key}/>;
        })}
      </div>
      <div className="line2">
        {keysLine2.map((key) => {
        return <Key keyVal={key}/>;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey/>
        {keysLine3.map((key) => {
        return <Key keyVal={key}/>;
        })}
        <Key keyVal={"DELETE"} bigKey/>
      </div>
    </div>
  )
}

export default Keyboard;