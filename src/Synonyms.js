import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          <li key={index}>
            <em>{synonym}</em>
          </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
