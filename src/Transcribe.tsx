import React, { useCallback, useState } from "react";

import * as TranscriptionService from "./transcription.service";

export const Transcribe = () => {
  const [content, setContent] = useState("");
  const [output, setOutput] = useState("");

  const handleRandom = useCallback(() => {
    TranscriptionService.random().then((random) => {
      setContent(random.content);
      setOutput(random.output);
    });
  }, []);

  const handleContentChange = useCallback((event) => {
    const next = event.target.value;
    setContent(next);

    TranscriptionService.transcribe(next).then((transcribed) =>
      setOutput(transcribed)
    );
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Transcribe from English to Czech</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="block">
                <form action="" method="get">
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        onChange={handleContentChange}
                        value={content}
                        name="content"
                        className="textarea"
                        placeholder="Textarea"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="column">
              <div className="block box">
                <strong>Output:</strong> {output}
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <button type="button" onClick={handleRandom} className="button">
                Try a random sentence
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
