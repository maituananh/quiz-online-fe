import { Button } from "@components/index";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import QuestionForm from "../../components/QuestionForm";

function QuizCreator() {
  const creationQuestion = {
    id: 0,
    question: "",
    answers: [],
  };

  const [questions, setQuestions] = useState([
    { ...creationQuestion, id: uuidv4() },
  ]);

  const handleAddQuestion = () => {
    questions.push({ ...creationQuestion, id: uuidv4() });
    setQuestions([...questions]);
  };

  const handleUpdateQuestion = (questionId, updateProperties) => {
    const question = questions.find((q) => q.id === questionId);
    question.answers = updateProperties.answers;

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

        <Button
          type="button"
          label="Add Quiz"
          handleClick={handleAddQuestion}
        />
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
