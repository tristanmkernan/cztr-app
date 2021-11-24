import React from "react";
import "./App.css";

import { Transcribe } from "./Transcribe";
import { WordSearch } from "./WordSearch";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Transcribe />
      <hr />
      <WordSearch />
      <Footer />
    </div>
  );
}

export default App;
