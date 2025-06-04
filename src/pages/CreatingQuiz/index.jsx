import { Button } from "@components/index";
import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Question from "../../components/Question";

function CreatingQuiz() {
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
    <Content className="mt-0 ml-4 mr-4 bg-neutral-50">
      <Breadcrumb
        className="mt-0 ml-4"
        items={[{ title: "User" }, { title: "Bill" }]}
      />

      {quizs.map((q) => (
        <Question key={q.id} question={q} />
      ))}

      <Button
        containerCss="border-2 border-dashed flex justify-center mt-1 rounded-md"
        type="button"
        name="Add Quiz"
        handleClickBtn={handleClickAddQuiz}
      />
    </Content>
  );
}

export default CreatingQuiz;
