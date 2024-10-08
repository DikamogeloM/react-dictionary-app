import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Audio
      </a>

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
