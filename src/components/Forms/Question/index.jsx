import { AnswerInput, Button, Label } from "@components/index";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor } from "primereact/editor";
import PropTypes from "prop-types";
import Switch from "react-switch";
import { v4 as uuidv4 } from "uuid";

function QuestionForm({ question, onDeleteQuestion, onUpdateQuestion }) {
  const quizAnswer = {
    id: 0,
    answer: "",
    isCorrect: false,
  };

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
    question.answers.find((answer) => answer.id === answerId).answer = value;
    onUpdateQuestion(question.id, { answers: question.answers });
  };

  const handleIsCorrectAnswer = (answerId, value) => {
    if (!question.isMultipleChoice) {
      question.answers.map((answer) => (answer.isCorrect = false));
    }
    question.answers.find((answer) => answer.id === answerId).isCorrect = value;
    onUpdateQuestion(question.id, { answers: question.answers });
  };

  const handleEnterAnswer = (e) => {
    question.questionText = e;
    onUpdateQuestion(question.id, { questionText: question.questionText });
  };

  const handleSelectMultipleAnswer = () => {
    onUpdateQuestion(question.id, {
      isMultipleChoice: !question.isMultipleChoice,
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4 border-2 rounded-md m-4 mt-5 p-3 border-blue-300">
      <div className="col-span-12 p-2 space-y-2">
        <div className="flex items-center justify-between">
          <Label />
          <FontAwesomeIcon
            icon={faXmark}
            className="text-red-500 cursor-pointer"
            onClick={handleDeleteQuestion}
          />
        </div>

        <Editor
          value={question.questionText}
          onTextChange={(e) => handleEnterAnswer(e.htmlValue)}
          style={{ height: "120px" }}
        />

        <div className="flex items-center pt-3 pb-3 justify-between">
          <div className="flex items-center">
            <Switch
              height={18}
              width={50}
              className="pl-2 pr-2"
              onChange={handleSelectMultipleAnswer}
              checked={question.isMultipleChoice}
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
              isMultipleChoice={question.isMultipleChoice}
              onDelete={handleDeleteAnswer}
              onTextChange={handleAnswerTextChange}
              onIsCorrectAnswer={handleIsCorrectAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

QuestionForm.prototype = {
  question: PropTypes.object,
  onDeleteQuestion: PropTypes.func,
  onUpdateQuestion: PropTypes.func,
};

export default QuestionForm;
