import "./App.css";
import SectionSelection from "./SectionSelection.tsx";
import React from "react";
import { SECTIONS } from "./const.ts";
import QuestionGenerator from "./QuestionGenerator.tsx";

function App() {
  const [section, setSection] = React.useState(SECTIONS.SPEAKING_A);
  return (
    <div className="flex flex-col gap-y-5">
      <SectionSelection updateSection={setSection} />
      <QuestionGenerator key={section} section={section} />
    </div>
  );
}

export default App;
