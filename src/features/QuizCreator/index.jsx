import { Button, QuestionForm } from "@components/index";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function QuizCreator() {
  const creationQuestion = {
    id: 0,
    isMultipleChoice: false,
    questionText: "",
    answers: [],
  };

  const [questions, setQuestions] = useState([
    { ...creationQuestion, id: uuidv4() },
  ]);

  const handleAddQuestion = () => {
    questions.push({ ...creationQuestion, id: uuidv4() });
    setQuestions([...questions]);
  };

  const handleCreateQuizzes = () => {
    console.log(questions);
  };

  const handleUpdateQuestion = (questionId, updateProperties) => {
    const question = questions.find((q) => q.id === questionId);

    question.isMultipleChoice =
      updateProperties.isMultipleChoice !== undefined
        ? updateProperties.isMultipleChoice
        : question.isMultipleChoice;

    question.answers =
      updateProperties.answers !== undefined
        ? updateProperties.answers
        : question.answers;

    question.questionText =
      updateProperties.questionText !== undefined
        ? updateProperties.questionText
        : question.questionText;

    setQuestions([...questions]);
  };

  const handleDeleteQuestion = (id) => {
    const deletedQuestions = questions.filter((q) => q.id !== id);
    setQuestions([...deletedQuestions]);
  };

  return (
    <>
      <div className="flex items-center justify-between m-3">
        <h1 class="text-3xl font-bold text-blue-600 flex items-center">
          <FontAwesomeIcon icon={faPlusCircle} />
          <p className="ml-3">Create New Quiz</p>
        </h1>
        <div className="flex">
          <Button
            type="button"
            label="Add Quiz"
            handleClick={handleAddQuestion}
          />
          <Button
            type="button"
            label="Create Quizzes"
            handleClick={handleCreateQuizzes}
            css="from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse">
        {questions.map((q) => (
          <QuestionForm
            key={q.id}
            question={q}
            onUpdateQuestion={handleUpdateQuestion}
            onDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      </div>
    </>
  );
}

export default QuizCreator;
