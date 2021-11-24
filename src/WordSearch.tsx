import React, { useCallback, useState } from "react";

import * as TranscriptionService from "./transcription.service";

export const WordSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TranscriptionService.QueryResult[]>(
    []
  );

  const handleQueryChange = useCallback((event) => {
    const next = event.target.value;
    setQuery(next);

    TranscriptionService.query(next).then(setResults);
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Word search</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="block">
            <div className="field">
              <label className="label">Search</label>
              <div className="control">
                <input
                  onChange={handleQueryChange}
                  value={query}
                  className="input"
                  type="search"
                  placeholder="Fish"
                />
              </div>
            </div>
          </div>
          <div className="block">
            {results.map((result) => (
              <article key={result.id} className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{result.content}</strong>{" "}
                      <small>{result.ipa_transcription}</small>{" "}
                      <small>{result.cz_transcription}</small>
                      <br />
                      {result.definition}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
