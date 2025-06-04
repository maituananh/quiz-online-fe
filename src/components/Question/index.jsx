import { LabelQuestion } from "@components/index";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { useState } from "react";
import Switch from "react-switch";
import { v4 as uuidv4 } from "uuid";

function Question({ question }) {
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
    const newAnswers = answers.filter((answer) => answer.id !== id);
    setAnswers(newAnswers);
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
    <div className="grid grid-cols-12 gap-4 border-2 rounded-md p-4 mt-5">
      <div className="col-span-12 p-2 space-y-2">
        <LabelQuestion />

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
            className="p-1"
            icon="pi pi-check"
            label="Add answers"
            onClick={handleClickAddAnswer}
          />
          {/* <Button
            name="Add answers"
            containerCss="border-2 p-1 border-dashed w-[180px] ml-5 rounded-md"
            buttonCss="ml-2"
            handleClickBtn={handleClickAddAnswer}
          /> */}
        </div>

        <div className="space-y-2">
          {answers.map((answer) => (
            <>
              {/* <RadioButton
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                onChange={(e) => setIngredient(e.value)}
                checked={ingredient === "Cheese"}
              />
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button icon="pi pi-check" /> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;

{
  /* <Answer
              key={answer.id}
              answerType={isMultipleAnswer ? "checkbox" : "radio"}
              handleDeleteClick={() => handleDeleteClick(answer.id)}
              handleChangeAnswer={(e) =>
                handleChangeAnswer(answer.id, e.target.value)
              }
              handleCorrectAnswerClick={() =>
                handleCorrectAnswerClick(answer.id)
              }
            /> */
}
