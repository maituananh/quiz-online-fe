import { QuestionList } from "@features/index";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ManageQuestion() {
  return (
    <div className="m-3">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
        <FontAwesomeIcon icon={faEdit} className="mr-3" />
        <p>Manage Quizzes</p>
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        id="quiz-list"
      >
        <QuestionList />
      </div>
    </div>
  );
}

export default ManageQuestion;
