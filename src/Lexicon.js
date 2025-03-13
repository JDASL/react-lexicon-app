import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Lexicon() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log();
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let pexelsApiKey = "0of4a675977824391c9f2t2e3d0a170b";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    console.log("Using Pexels API Key:", pexelsApiKey);

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;

    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelsResponse)
      .catch((error) => {
        console.error(
          "Pexels API Error:",
          error.response ? error.response.data : error.message
        );
      });
    console.log("Pexels API Key:", pexelsApiKey);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Lexicon">
      <section className="search-bar">
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">
          Suggested words: omega, society, international...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
