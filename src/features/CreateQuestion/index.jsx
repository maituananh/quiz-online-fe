import { Button, Input, Label } from "@components/index";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor } from "primereact/editor";
import { useState } from "react";
import Switch from "react-switch";
import { v4 as uuidv4 } from "uuid";

function CreateQuestion({ question }) {
  const quizAnswer = {
    id: 0,
    answer: "",
    isCorrect: false,
  };

  const [answers, setAnswers] = useState([]);
  const [isMultipleAnswer, setIsMultipleAnswer] = useState(false);
  const [editorValue, setEditorValue] = useState("");

  const handleClickAddAnswer = () => {
    question.answers.push({ ...quizAnswer, id: uuidv4() });
    setAnswers([...question.answers]);
  };

  const handleDeleteClick = (id) => {
    question.answers = question.answers.filter((answer) => answer.id !== id);
    setAnswers([...question.answers]);
  };

  const handleCorrectAnswerClick = (id) => {
    answers.find((answer) => answer.id === id).isCorrect = true;
  };

  const handleChangeAnswer = (id, value) => {
    answers.find((answer) => answer.id === id).answer = value;
  };

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
            handleClick={handleClickAddAnswer}
            type="button"
          />
        </div>

        <div className="space-y-2">
          {answers.map((answer) => (
            <div className="flex items-center justify-between space-x-2">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
              />

              <Input />

              <FontAwesomeIcon
                icon={faTrashCan}
                className="text-red-500 h-5"
                onClick={() => handleDeleteClick(answer.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateQuestion;
