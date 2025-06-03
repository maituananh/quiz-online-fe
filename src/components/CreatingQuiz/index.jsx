import { Answer, Button, LabelQuestion, TextEditor } from "@components/index";
import { useState } from "react";
import Switch from "react-switch";
import { v4 as uuidv4 } from "uuid";

const quizAnswer = {
  id: 0,
  answer: "",
  isCorrect: false,
};

function CreateQuiz() {
  const [answers, setAnswers] = useState([]);
  const [isMultipleAnswer, setIsMultipleAnswer] = useState(false);

  const handleClickAddAnswer = () => {
    const newQuiz = { ...quizAnswer, id: uuidv4() };
    setAnswers([...answers, newQuiz]);
  };

  const handleDeleteClick = (id) => {
    const newAnswers = answers.filter((answer) => answer.id !== id);
    setAnswers(newAnswers);
  };

  const handleCorrectAnswerClick = (id) => {
    answers.find((answer) => {
      if (answer.id === id) {
        answer.isCorrect = true;
      }
    });
  };

  const handleChangeAnswer = (id, value) => {
    answers.find((answer) => {
      if (answer.id === id) {
        answer.answer = value;
      }
    });
  };

  const handleSelectMultipleAnswer = () => {
    setIsMultipleAnswer(!isMultipleAnswer);
  };

  return (
    <div className="grid grid-cols-12 gap-4 border-2 rounded-md p-4">
      <div className="col-span-12 p-2 space-y-2">
        <LabelQuestion />

        <TextEditor />

        <div className="flex items-center pt-3">
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

        <div className="space-y-2">
          {answers.map((answer) => {
            return (
              <Answer
                key={answer.id}
                answerType={isMultipleAnswer ? "checkbox" : "radio"}
                handleDeleteClick={() => handleDeleteClick(answer.id)}
                handleChangeAnswer={(e) =>
                  handleChangeAnswer(answer.id, e.target.value)
                }
                handleCorrectAnswerClick={() =>
                  handleCorrectAnswerClick(answer.id)
                }
              />
            );
          })}
        </div>

        <Button
          name="Add answers"
          containerCss="border-2 p-1 border-dashed w-[180px] ml-5 rounded-md"
          buttonCss="ml-2"
          handleClickBtn={handleClickAddAnswer}
        />
      </div>
    </div>
  );
}

export default CreateQuiz;
