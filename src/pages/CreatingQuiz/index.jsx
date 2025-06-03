import { Button, CreateQuiz } from "@components/index";
import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";

const creationQuiz = {
  id: 0,
  question: "",
  answers: [
    {
      id: 0,
      answer: "",
      isCorrect: false,
    },
  ],
}

function CreatingQuiz() {
  const [quiz, setQuiz] = useState([]);

  const handleClickAddQuiz = () => {
    setQuiz([...quiz, creationQuiz]);
  };

  return (
    <Content className="mt-0 ml-4 mr-4 bg-neutral-50">
      <Breadcrumb
        className="mt-0 ml-4"
        items={[{ title: "User" }, { title: "Bill" }]}
      />

      <CreateQuiz />

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
