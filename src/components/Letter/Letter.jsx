import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import "./styles.css";

function Letter({ letterPos, attemptVal }) {
    const { board } = useContext(Appcontext);
    const letter = board[attemptVal][letterPos];
  return (
    <div className="letter">{letter}</div>
  )
}

export default Letter;