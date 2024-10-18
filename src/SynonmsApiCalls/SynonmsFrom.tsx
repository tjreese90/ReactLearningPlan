import React, { useState } from "react";
import "./synonms.module.css";

type Synonm = {
  word: string;
  score: number;
};

const SynonmForm = () => {
  // Keep track of when user types into input.
  const [word, setWord] = useState("");
  const [synonms, setSynonms] = useState<Synonm[]>([]);

  const BASE_URL = `https://api.datamuse.com`;

  // When the user presses enter, we want to do a request to an API endpoint.
  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page re-rendering

    fetch(`${BASE_URL}/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data) => {
        // Debug: Check the type of `data`
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          // If `data` is an array, sort it
          const sortedData = data.sort((a: Synonm, b: Synonm) =>
            a.word.localeCompare(b.word)
          );
          setSynonms(sortedData); // Set sorted data
        } else {
          console.error("Expected an array but got:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching synonyms:", error);
      });
  };

  return (
    <div className="SynonmForm">
      <form onSubmit={(e) => handleFetchSynonyms(e)}>
        <label htmlFor="word-input">Your Word</label>
        <input
          id="word-input"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button type="submit">Fetch Synonyms</button>
      </form>
      <ul>
        {synonms.map((synonm: Synonm, index) => (
          <li key={`${synonm.word}-${index}`}>{synonm.word}</li>
        ))}
      </ul>
    </div>
  );
};

export default SynonmForm;
