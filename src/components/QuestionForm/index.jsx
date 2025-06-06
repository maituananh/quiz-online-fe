import { Button, Label } from "@components/index";
import { Editor } from "primereact/editor";
import { useState } from "react";
import Switch from "react-switch";
import { v4 as uuidv4 } from "uuid";
import AnswerInput from "../AnswerInput";

function QuestionForm({ question, onDeleteQuestion, onUpdateQuestion }) {
  const quizAnswer = {
    id: 0,
    answer: "",
    isCorrect: false,
  };

  const [isMultipleAnswer, setIsMultipleAnswer] = useState(false);
  const [editorValue, setEditorValue] = useState("");

  const handleAddAnswer = () => {
    question.answers.push({ ...quizAnswer, id: uuidv4() });
    onUpdateQuestion(question.id, { answers: question.answers });
  };

  const handleDeleteAnswer = (answerId) => {
    const answers = question.answers.filter((answer) => answer.id !== answerId);
    onUpdateQuestion(question.id, { answers: answers });
  };

  const handleDeleteQuestion = () => {
    onDeleteQuestion(question.id);
  };

  const handleAnswerTextChange = (answerId, value) => {
    const question = (question.answers.find(
      (answer) => answer.id !== answerId
    ).answer = value);
    onUpdateQuestion(question.id, { answer: question });
  };
  // const handleCorrectAnswerClick = (id) => {
  //   answers.find((answer) => answer.id === id).isCorrect = true;
  // };

  // const handleChangeAnswer = (id, value) => {
  //   answers.find((answer) => answer.id === id).answer = value;
  // };

  const handleSelectMultipleAnswer = () => {
    setIsMultipleAnswer(!isMultipleAnswer);
  };

  return (
    <div className="grid grid-cols-12 gap-4 border-2 rounded-md m-4 mt-5 p-3 border-blue-300">
      <div className="col-span-12 p-2 space-y-2">
        <Label />

        <Editor
          value={editorValue}
          onTextChange={(e) => setEditorValue(e.htmlValue)}
          style={{ height: "120px" }}
        />

        <div className="flex items-center pt-3 pb-3 justify-between">
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900">Choices</p>
            <Switch
              height={18}
              width={50}
              className="pl-2 pr-2"
              onChange={handleSelectMultipleAnswer}
              checked={isMultipleAnswer}
            />
            <span>Multiple answer</span>
          </div>
          <Button
            label="Add answers"
            handleClick={handleAddAnswer}
            type="button"
          />
        </div>

        <div className="space-y-2">
          {question.answers.map((answer) => (
            <AnswerInput
              key={answer.id}
              answer={answer}
              onDelete={handleDeleteAnswer}
              onTextChange={handleAnswerTextChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
