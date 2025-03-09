import React from "react";

export default function Synonyms({ synonyms = [] }) {
  console.log("Synonyms prop:", synonyms);

  if (synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        {synonyms.map((synonym, index) => (
          <li key={index}>
            <em>{synonym}</em>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}
