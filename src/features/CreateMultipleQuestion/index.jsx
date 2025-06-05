import { Button } from "@components/index";
import { CreateQuestion } from "@features/index";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateMultipleQuestion() {
  const creationQuiz = {
    id: 0,
    question: "",
    answers: [],
  };

  const [quizs, setQuizs] = useState([{ ...creationQuiz, id: uuidv4() }]);

  const handleClickAddQuiz = () => {
    quizs.push({ ...creationQuiz, id: uuidv4() });
    setQuizs([...quizs]);
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
          handleClick={handleClickAddQuiz}
        />
      </div>

      <div className="flex flex-col-reverse">
        {quizs.map((q) => (
          <CreateQuestion key={q.id} question={q} />
        ))}
      </div>
    </>
  );
}

export default CreateMultipleQuestion;
