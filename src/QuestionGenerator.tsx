import { useCallback, useState } from "react";
import { generateQuestion } from "./utils.ts";
import { SECTIONS } from "./const.ts";

type QuestionGeneratorProps = {
  section: SECTIONS;
};
const QuestionGenerator = ({ section }: QuestionGeneratorProps) => {
  const [question, setQuestion] = useState({ type: "", value: "" });

  const getQuestion = useCallback(() => {
    setQuestion(generateQuestion(section));
  }, [section]);

  return (
    <div>
      <button onClick={getQuestion}>Generate Question</button>
      {question && question.type === "text" && <div>{question.value}</div>}
      {question && question.type === "link" && (
        <img alt={"TEF canada speaking section"} src={question.value} />
      )}
    </div>
  );
};

export default QuestionGenerator;
