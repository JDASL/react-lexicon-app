import React from "react";

export default function Meaning(props) {
  console.log(props.meaning); // Debugging

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
            </p>
            {definition.example && (
              <p>
                <strong>Example:</strong> "{definition.example}"
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
